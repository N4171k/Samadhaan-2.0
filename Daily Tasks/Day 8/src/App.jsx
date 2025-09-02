import React, { useState } from 'react';
import './App.css'; // A little bit of styling makes it nicer!

function App() {
  // State to hold the list of to-do items
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React lists', completed: true },
    { id: 2, text: 'Understand events', completed: false },
  ]);

  // State to hold the value of the input field
  const [inputValue, setInputValue] = useState('');

  // Handles form submission to add a new to-do
  const handleAddTodo = (e) => {
    // Prevent the default form behavior of refreshing the page
    e.preventDefault();

    // Don't add empty or whitespace-only tasks
    if (inputValue.trim() === '') return;

    // Create a new to-do object and add it to the existing list
    setTodos([
      ...todos,
      { id: Date.now(), text: inputValue, completed: false }
    ]);

    // Clear the input field for the next entry
    setInputValue('');
  };

  // Toggles the 'completed' status of a to-do item
  const handleToggleComplete = (idToToggle) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === idToToggle) {
        // Return a new object with the 'completed' status flipped
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  
  // Deletes a to-do item from the list
  const handleDeleteTodo = (idToDelete) => {
    // Filter out the to-do with the matching ID
    const remainingTodos = todos.filter(todo => todo.id !== idToDelete);
    setTodos(remainingTodos);
  };


  return (
    <div className="todo-app">
      <h1>My To-Do List 📝</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task..."
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            className={todo.completed ? 'completed' : ''}
          >
            <span onClick={() => handleToggleComplete(todo.id)}>
              {todo.text}
            </span>
            <button className="delete-btn" onClick={() => handleDeleteTodo(todo.id)}>
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;