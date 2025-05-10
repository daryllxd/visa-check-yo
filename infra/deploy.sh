#!/bin/bash

# Check if IP address is provided
if [ -z "$1" ]; then
    echo "Please provide the EC2 instance IP address"
    echo "Usage: ./deploy.sh <ec2-ip>"
    exit 1
fi

EC2_IP=$1
KEY_PATH="certificates/visa-check-key.pem"

# Build the Docker image locally
echo "Building Docker image locally..."
docker build --platform linux/amd64 -t visa-check-app:latest .

# Save the Docker image to a file
echo "Saving Docker image..."
docker save visa-check-app:latest > visa-check-app.tar

# SSH into EC2 and create app directory
echo "Setting up app directory on EC2..."
ssh -i $KEY_PATH ubuntu@$EC2_IP "mkdir -p ~/app"

# Copy only the necessary files to EC2
echo "Copying files to EC2..."
scp -i $KEY_PATH docker-compose.yml ubuntu@$EC2_IP:~/app/
scp -i $KEY_PATH visa-check-app.tar ubuntu@$EC2_IP:~/app/

# SSH into EC2 and start the application
echo "Deploying application..."
ssh -i $KEY_PATH ubuntu@$EC2_IP << 'ENDSSH'
# Install Docker and Docker Compose
sudo apt-get update
sudo apt-get install -y docker.io docker-compose

# Start and enable Docker service
sudo systemctl start docker
sudo systemctl enable docker

# Add ubuntu user to docker group
sudo usermod -aG docker ubuntu

# Apply the new group membership
newgrp docker

cd ~/app
# Load the Docker image
echo "Loading Docker image..."
docker load < visa-check-app.tar

# Start the application
echo "Starting application..."
docker-compose down
docker-compose up -d

# Clean up
rm visa-check-app.tar
ENDSSH

# Clean up local files
rm visa-check-app.tar

echo "Deployment complete! Application should be running at http://$EC2_IP:3000" 