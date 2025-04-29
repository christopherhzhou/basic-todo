import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

const API_URL = import.meta.env.VITE_API_URL || '/api';

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/todos`);
      if (!response.ok) {
        throw new Error('Failed to fetch todos');
      }
      const data = await response.json();
      setTodos(data);
    } catch (err) {
      console.error('Error fetching todos:', err);
      setError('Failed to load todos. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const addTodo = async (text) => {
    try {
      const response = await fetch(`${API_URL}/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to add todo');
      }
      
      const newTodo = await response.json();
      setTodos([...todos, newTodo]);
    } catch (err) {
      console.error('Error adding todo:', err);
      setError('Failed to add todo. Please try again.');
    }
  };

  const toggleTodo = async (id) => {
    try {
      const response = await fetch(`${API_URL}/todos/${id}`, {
        method: 'PUT',
      });
      
      if (!response.ok) {
        throw new Error('Failed to update todo');
      }
      
      const updatedTodo = await response.json();
      setTodos(
        todos.map((todo) => 
          todo._id === id ? updatedTodo : todo
        )
      );
    } catch (err) {
      console.error('Error updating todo:', err);
      setError('Failed to update todo. Please try again.');
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`${API_URL}/todos/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete todo');
      }
      
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (err) {
      console.error('Error deleting todo:', err);
      setError('Failed to delete todo. Please try again.');
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Todo App</h1>
        <p>Keep track of your tasks</p>
      </header>
      
      {error && <div className="error">{error}</div>}
      
      <TodoForm addTodo={addTodo} />
      
      {isLoading ? (
        <div className="loading">Loading todos...</div>
      ) : (
        <TodoList 
          todos={todos} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo} 
        />
      )}
    </div>
  );
}

export default App; 