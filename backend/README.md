# Todo App Backend

This is the backend server for the Todo App MVP. It provides a RESTful API for managing todo items.

## Setup

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:

```
PORT=5001
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/todo-app?retryWrites=true&w=majority
```

For MongoDB Atlas setup, follow the instructions in [MONGODB_ATLAS_SETUP.md](./MONGODB_ATLAS_SETUP.md).

### Development

Run the development server:

```bash
npm run dev
```

This will start the server with nodemon for hot-reload during development.

### Production

Start the server in production mode:

```bash
npm start
```

## API Documentation

The API provides the following endpoints:

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Toggle todo completion status
- `DELETE /api/todos/:id` - Delete a todo

For detailed API documentation, see [API_DOCUMENTATION.md](../API_DOCUMENTATION.md) in the root directory.

## Fallback Mode

If MongoDB connection fails, the server will automatically fall back to in-memory storage. This is useful for development and testing, but all data will be lost when the server restarts.

## Project Structure

```
backend/
├── .env                   # Environment variables
├── package.json           # Node.js dependencies and scripts
├── src/
│   ├── models/
│   │   └── Todo.js        # Mongoose model for Todo
│   ├── routes/
│   │   └── todos.js       # Express routes for todos API
│   └── server.js          # Express server setup
└── MONGODB_ATLAS_SETUP.md # Instructions for MongoDB Atlas setup
``` 