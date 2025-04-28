import { formatDate } from '../utils/formatDate';
import './TodoItem.css';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo._id)}
          />
          <span className="checkmark"></span>
        </label>
        <div className="todo-details">
          <span className="todo-text">{todo.text}</span>
          <span className="todo-date">
            {formatDate(todo.createdAt)}
          </span>
        </div>
      </div>
      <button
        className="delete-btn"
        onClick={() => deleteTodo(todo._id)}
        aria-label="Delete todo"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
        </svg>
      </button>
    </div>
  );
}

export default TodoItem; 