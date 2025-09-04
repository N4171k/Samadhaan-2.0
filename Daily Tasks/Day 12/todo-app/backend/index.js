// backend/index.js

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Allows cross-origin requests (from our React app)
app.use(express.json()); // Allows us to parse JSON in the request body

// In-memory "database"
let todos = [
    { id: 1, text: 'Learn Node.js', completed: false },
    { id: 2, text: 'Build a To-Do API', completed: false },
    { id: 3, text: 'Connect React to API', completed: false }
];
let nextId = 4;

// --- API ROUTES ---

// GET /api/todos - Fetch all to-do items
app.get('/api/todos', (req, res) => {
    res.json(todos);
});

// POST /api/todos - Add a new to-do item
app.post('/api/todos', (req, res) => {
    if (!req.body.text) {
        return res.status(400).json({ message: 'To-do text is required' });
    }
    const newTodo = {
        id: nextId++,
        text: req.body.text,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// DELETE /api/todos/:id - Delete a to-do item
app.delete('/api/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id, 10);
    const initialLength = todos.length;
    
    todos = todos.filter(todo => todo.id !== todoId);

    if (todos.length < initialLength) {
        res.status(200).json({ message: 'To-do deleted successfully' });
    } else {
        res.status(404).json({ message: 'To-do not found' });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});