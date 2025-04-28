# Todo App Deployment Guide

This guide provides instructions for deploying the Todo App using Docker.

## Prerequisites

- Docker and Docker Compose installed on your machine
- MongoDB Atlas account (or other MongoDB provider)
- Git (optional, for version control)

## Deployment Steps

### 1. Set up Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file and set your MongoDB connection string:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/todo-app?retryWrites=true&w=majority
   ```

### 2. Build and Run with Docker Compose

1. Build the containers:
   ```bash
   docker-compose build
   ```

2. Start the services:
   ```bash
   docker-compose up -d
   ```

3. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5001/api

### 3. Stopping the Application

```bash
docker-compose down
```

## Deployment to Production

### Option 1: Deploy to a VPS (DigitalOcean, AWS EC2, etc.)

1. SSH into your server
2. Clone your repository
3. Follow steps 1-2 above
4. Set up a reverse proxy with Nginx or similar to handle HTTPS

### Option 2: Deploy using Container Services

#### Backend

You can deploy the backend container to services like:
- AWS ECS/EKS
- Google Cloud Run
- Azure Container Instances
- Heroku Container Registry

#### Frontend

For the frontend, you can either:
1. Use the same container approach as the backend
2. Build the frontend and deploy as static files to:
   - AWS S3 + CloudFront
   - Netlify
   - Vercel
   - GitHub Pages

## Environment Configuration

For production, you'll need to update:

1. CORS settings in the backend
2. API URL in the frontend (update API calls to point to your deployed backend)
3. Configure proper security headers and HTTPS

## Monitoring and Maintenance

- Set up logging with tools like ELK Stack, Papertrail, or Datadog
- Monitor application health with Uptime Robot or similar services
- Configure automated backups for your MongoDB database

## Troubleshooting

- Check Docker logs: `docker-compose logs`
- Backend logs: `docker-compose logs backend`
- Frontend logs: `docker-compose logs frontend` 