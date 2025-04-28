#!/bin/bash

# Print instructions for MongoDB Atlas
echo "============================================="
echo "Todo App Setup"
echo "============================================="
echo "Before running the app, make sure to:"
echo "1. Set up MongoDB Atlas following instructions in backend/MONGODB_ATLAS_SETUP.md"
echo "2. Update the MONGODB_URI in backend/.env with your MongoDB Atlas connection string"
echo "============================================="
echo ""

# Start backend server
echo "Starting backend server..."
cd backend
npm run dev & 
BACKEND_PID=$!

# Start frontend server
echo "Starting frontend server..."
cd ../frontend
npm run dev &
FRONTEND_PID=$!

# Function to cleanup on exit
cleanup() {
    echo "Stopping servers..."
    kill $BACKEND_PID $FRONTEND_PID
    exit
}

# Trap SIGINT and SIGTERM to cleanup processes
trap cleanup SIGINT SIGTERM

# Keep script running
echo "Servers are running. Press Ctrl+C to stop."
echo "Backend: http://localhost:5001"
echo "Frontend: http://localhost:3000"
wait 