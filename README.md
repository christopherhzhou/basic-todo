# Full Stack Todo App

A complete todo application with React frontend and Express backend, containerized with Docker for easy deployment.

## Features

- ✅ Create, view, complete, and delete todo items
- 🔄 Real-time UI updates
- 🌐 RESTful API with Express
- 💾 MongoDB data persistence
- 🐳 Docker containerization
- 🎨 Clean, responsive design

## Tech Stack

### Frontend
- React (with Vite)
- CSS3 for styling
- Fetch API for data fetching

### Backend
- Node.js
- Express
- MongoDB (with Mongoose)
- RESTful API architecture

### DevOps
- Docker & Docker Compose
- Nginx for frontend serving

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB Atlas account or local MongoDB instance
- Docker and Docker Compose (for containerized deployment)

### Local Development Setup

#### Backend

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env file with your MongoDB connection string

# Start backend in development mode
npm run dev
```

Backend will be available at http://localhost:5001

#### Frontend

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start frontend in development mode
npm run dev
```

Frontend will be available at http://localhost:3000

### Docker Deployment

For a containerized setup using Docker:

```bash
# Create .env file in the project root
cp .env.example .env
# Edit .env file with your MongoDB connection string

# Build and start containers
docker-compose up -d

# To stop the containers
docker-compose down
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5001/api

## Project Structure

```
todo-app/
├── backend/               # Backend Express application
│   ├── src/               # Application source code
│   │   ├── models/        # Mongoose models
│   │   ├── routes/        # API routes
│   │   └── server.js      # Express server setup
│   ├── Dockerfile         # Backend Docker configuration
│   └── package.json       # Backend dependencies
├── frontend/              # React frontend application
│   ├── src/               # Application source code
│   │   ├── components/    # React components
│   │   ├── utils/         # Utility functions
│   │   ├── App.jsx        # Main App component
│   │   └── main.jsx       # Entry point
│   ├── Dockerfile         # Frontend Docker configuration
│   └── package.json       # Frontend dependencies
├── docker-compose.yml     # Docker Compose configuration
├── .env.example           # Example environment variables
└── README.md              # This file
```

## API Documentation

API endpoints are documented in [API_DOCUMENTATION.md](./API_DOCUMENTATION.md).

Summary of available endpoints:
- `GET /api/todos` - List all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Toggle todo completion status
- `DELETE /api/todos/:id` - Delete a todo

## Deployment Options

See [DEPLOYMENT.md](./DEPLOYMENT.md) for comprehensive deployment instructions and options:

- Docker-based deployment on VPS
- Platform-as-a-Service options (Railway, Render, Heroku)
- Cloud provider solutions (AWS, Google Cloud, Azure)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- MongoDB Atlas for database hosting
- React team for the excellent frontend library
- Express.js for the backend framework 