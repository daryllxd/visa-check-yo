#!/bin/bash

# Check if IP address is provided
if [ -z "$1" ]; then
    echo "Please provide the EC2 instance IP address"
    echo "Usage: ./deploy.sh <ec2-ip>"
    exit 1
fi

EC2_IP=$1
KEY_PATH="certificates/visa-check-key.pem"

# Build and push the Docker image
echo "Building Docker image..."
docker-compose build

# Copy necessary files to EC2
echo "Copying files to EC2..."
scp -i $KEY_PATH docker-compose.yml ubuntu@$EC2_IP:~/app/
scp -i $KEY_PATH Dockerfile ubuntu@$EC2_IP:~/app/
scp -i $KEY_PATH -r app/ ubuntu@$EC2_IP:~/app/
scp -i $KEY_PATH -r public/ ubuntu@$EC2_IP:~/app/
scp -i $KEY_PATH package.json ubuntu@$EC2_IP:~/app/
scp -i $KEY_PATH pnpm-lock.yaml ubuntu@$EC2_IP:~/app/

# SSH into EC2 and start the application
echo "Deploying application..."
ssh -i $KEY_PATH ubuntu@$EC2_IP << 'ENDSSH'
# Install Docker Compose
sudo apt-get update
sudo apt-get install -y docker-compose

cd ~/app
docker-compose down
docker-compose up -d
ENDSSH

echo "Deployment complete! Application should be running at http://$EC2_IP:3000" 