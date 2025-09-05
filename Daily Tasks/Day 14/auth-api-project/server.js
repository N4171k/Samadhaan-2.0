// server.js

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.error(err));

// A simple test route
app.get('/', (req, res) => {
    res.send('Auth API is running!');
});

// server.js (add these lines)

// Define Routes
const authRouter = require('./routes/auth');
app.use('/api/auth', authRouter);

// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));