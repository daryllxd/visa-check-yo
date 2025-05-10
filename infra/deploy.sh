#!/bin/bash

# Check if IP address is provided
if [ -z "$1" ]; then
    echo "Please provide the EC2 instance IP address"
    echo "Usage: ./deploy.sh <ec2-ip>"
    exit 1
fi

EC2_IP=$1

# Build and push the Docker image
echo "Building Docker image..."
docker-compose build

# Copy necessary files to EC2
echo "Copying files to EC2..."
scp -r ./* ec2-user@$EC2_IP:~/app/

# SSH into EC2 and start the application
echo "Deploying application..."
ssh ec2-user@$EC2_IP << 'ENDSSH'
cd ~/app
docker-compose down
docker-compose up -d
ENDSSH

echo "Deployment complete! Application should be running at http://$EC2_IP:3000" 