terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region  = var.aws_region
  profile = var.aws_profile
}

# Variables
variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "ap-southeast-1"
}

variable "aws_profile" {
  description = "AWS profile to use"
  type        = string
  default     = "daryll-visa-check"
}

variable "instance_name" {
  description = "Name of the Lightsail instance"
  type        = string
  default     = "visa-check-lightsail"
}

variable "blueprint_id" {
  description = "Lightsail blueprint ID"
  type        = string
  default     = "ubuntu_22_04"  # Ubuntu 22.04 LTS
}

variable "bundle_id" {
  description = "Lightsail bundle ID (size)"
  type        = string
  default     = "nano_2_0"  # 1GB RAM, 1 vCPU, 40GB SSD
}

variable "key_pair_name" {
  description = "Name of the SSH key pair"
  type        = string
  default     = "visa-check-key"
}

# Lightsail Instance
resource "aws_lightsail_instance" "app" {
  name              = var.instance_name
  availability_zone = "${var.aws_region}a"
  blueprint_id      = var.blueprint_id
  bundle_id         = var.bundle_id
  key_pair_name     = var.key_pair_name

  user_data = <<-EOF
              #!/bin/bash
              apt-get update
              apt-get install -y docker.io docker-compose
              systemctl start docker
              systemctl enable docker
              usermod -aG docker ubuntu
              EOF

  tags = {
    Environment = "development"
    Project     = "visa-check"
  }
}

# Output the public IP
output "public_ip" {
  value = aws_lightsail_instance.app.public_ip_address
} 