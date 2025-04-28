# Todo App API Documentation

This document provides comprehensive information about the Todo App API endpoints, request/response formats, and example usage.

## Base URL

```
http://localhost:5001/api
```

## Authentication

The API currently does not require authentication.

## Error Handling

All endpoints may return the following error responses:

- `400 Bad Request`: Invalid request parameters or missing required fields
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server-side error

Error responses will have the following format:

```json
{
  "message": "Error description"
}
```

## Endpoints

### 1. Get All Todos

Retrieves a list of all todos.

- **URL**: `/todos`
- **Method**: `GET`
- **Parameters**: None
- **Response**: `200 OK`
  
```json
[
  {
    "_id": "60d21b4667d0d8992e610c85",
    "text": "Buy groceries",
    "completed": false,
    "createdAt": "2023-06-22T14:10:30.000Z"
  },
  {
    "_id": "60d21b4667d0d8992e610c86",
    "text": "Clean the house",
    "completed": true,
    "createdAt": "2023-06-22T12:00:00.000Z"
  }
]
```

### 2. Create Todo

Creates a new todo item.

- **URL**: `/todos`
- **Method**: `POST`
- **Body**:
  
```json
{
  "text": "Buy groceries"
}
```

- **Response**: `201 Created`
  
```json
{
  "_id": "60d21b4667d0d8992e610c85",
  "text": "Buy groceries",
  "completed": false,
  "createdAt": "2023-06-22T14:10:30.000Z"
}
```

- **Error Responses**:
  - `400 Bad Request`: If the `text` field is empty or missing

```json
{
  "message": "Todo text is required"
}
```

### 3. Toggle Todo Completion

Toggles the completion status of a todo.

- **URL**: `/todos/:id`
- **Method**: `PUT`
- **URL Parameters**:
  - `id`: The ID of the todo to toggle
- **Response**: `200 OK`
  
```json
{
  "_id": "60d21b4667d0d8992e610c85",
  "text": "Buy groceries",
  "completed": true,
  "createdAt": "2023-06-22T14:10:30.000Z"
}
```

- **Error Responses**:
  - `404 Not Found`: If the todo with the specified ID doesn't exist

```json
{
  "message": "Todo not found"
}
```

### 4. Delete Todo

Deletes a todo item.

- **URL**: `/todos/:id`
- **Method**: `DELETE`
- **URL Parameters**:
  - `id`: The ID of the todo to delete
- **Response**: `200 OK`
  
```json
{
  "message": "Todo deleted"
}
```

- **Error Responses**:
  - `404 Not Found`: If the todo with the specified ID doesn't exist

```json
{
  "message": "Todo not found"
}
```

## Example Usage with cURL

### Get All Todos

```bash
curl http://localhost:5001/api/todos
```

### Create a Todo

```bash
curl -X POST \
  http://localhost:5001/api/todos \
  -H 'Content-Type: application/json' \
  -d '{"text": "Buy groceries"}'
```

### Toggle Todo Completion

```bash
curl -X PUT \
  http://localhost:5001/api/todos/60d21b4667d0d8992e610c85
```

### Delete a Todo

```bash
curl -X DELETE \
  http://localhost:5001/api/todos/60d21b4667d0d8992e610c85
```

## Example Usage with JavaScript/Fetch

### Get All Todos

```javascript
fetch('http://localhost:5001/api/todos')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### Create a Todo

```javascript
fetch('http://localhost:5001/api/todos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ text: 'Buy groceries' }),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### Toggle Todo Completion

```javascript
fetch('http://localhost:5001/api/todos/60d21b4667d0d8992e610c85', {
  method: 'PUT',
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### Delete a Todo

```javascript
fetch('http://localhost:5001/api/todos/60d21b4667d0d8992e610c85', {
  method: 'DELETE',
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

## Data Model

### Todo Object

| Field      | Type      | Description                                     |
|------------|-----------|-------------------------------------------------|
| _id        | String    | Unique identifier for the todo item             |
| text       | String    | The content of the todo item                    |
| completed  | Boolean   | Indicates whether the todo is completed or not  |
| createdAt  | Date      | The timestamp when the todo was created         | 