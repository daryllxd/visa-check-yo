#!/bin/bash

# Enable strict mode for the main script
set -euo pipefail

# Function to play sound
play_sound() {
    if [[ "$OSTYPE" == "darwin"* ]]; then
        afplay "./deployment-sounds/$1"
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        paplay "./deployment-sounds/$1"
    fi
}

# Play start sound
play_sound "acknowledged-hq.mp3"

# Check if IP address is provided
if [ -z "$1" ]; then
    echo "Please provide the EC2 instance IP address"
    echo "Usage: ./deploy.sh <ec2-ip>"
    play_sound "death-cry.mp3"
    exit 1
fi

EC2_IP=$1
KEY_PATH="certificates/visa-check-key-2.pem"

# Build the Docker image locally
echo "Building Docker image locally..."
docker build --platform linux/amd64 -t visa-check-app:latest .

# Save the Docker image to a file
echo "Saving Docker image..."
docker save visa-check-app:latest > visa-check-app.tar

# SSH into EC2 and create app directory
echo "Setting up app directory on EC2..."
ssh -i $KEY_PATH ubuntu@$EC2_IP "mkdir -p ~/app"

# Copy only the necessary files to EC2 using rsync
echo "Copying files to EC2..."
rsync -avz --progress \
    -e "ssh -i $KEY_PATH" \
    docker-compose.yml \
    visa-check-app.tar \
    ubuntu@$EC2_IP:~/app/

# SSH into EC2 and start the application
echo "Deploying application..."
ssh -i "$KEY_PATH" ubuntu@"$EC2_IP" << 'ENDSSH'
# Enable strict mode for the remote session
set -euo pipefail

# Check and clean up disk space
echo "Checking disk space..."
df -h

# Clean up old Docker resources
echo "Cleaning up old Docker resources..."
sudo docker system prune -af --volumes

# Clean up old package files
echo "Cleaning up old package files..."
sudo apt-get clean
sudo apt-get autoremove -y

# Check disk space again
echo "Disk space after cleanup:"
df -h

# Install Docker and Docker Compose
sudo apt-get update
sudo apt-get install -y docker.io docker-compose

# Start and enable Docker service
sudo systemctl start docker
sudo systemctl enable docker

# Add ubuntu user to docker group
sudo usermod -aG docker ubuntu

cd ~/app
# Load the Docker image
echo "Loading Docker image..."
sudo docker load < visa-check-app.tar

# Start the application
echo "Starting application..."
sudo docker-compose down
sudo docker-compose up -d

# Wait for application to be ready
echo "Waiting for application to be ready..."
for i in {1..30}; do
    if curl -s http://localhost:3000/api/health > /dev/null; then
        echo "Application is ready!"
        break
    fi
    if [ $i -eq 30 ]; then
        echo "ERROR: Application failed to start within timeout"
        exit 1
    fi
    sleep 2
done

# Show container status
echo "Container status:"
sudo docker ps

# Clean up
rm visa-check-app.tar
ENDSSH

# Check if the SSH command failed
if [ $? -ne 0 ]; then
    echo "Deployment failed!"
    play_sound "death-cry.mp3"
    exit 1
fi

# Clean up local files
rm visa-check-app.tar

echo "Deployment complete! Application should be running at http://$EC2_IP:3000"
echo "To verify deployment, run: curl http://$EC2_IP:3000/api/health"

# Show container status
echo "Checking container status..."
ssh -i $KEY_PATH ubuntu@$EC2_IP 'docker ps'

# Play success sound
play_sound "systems-functional.mp3" 
