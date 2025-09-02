const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000;

app.use(cors()); 
const students = [
    { id: 1, name: 'Naitik', major: 'Computer Science' },
    { id: 2, name: 'Riya', major: 'Electrical Engineering' },
    { id: 3, name: 'Utkarsh', major: 'Mathematics' }
];

app.get('/', (req, res) => {
    res.send('Welcome to the Student API!');
});

app.get('/api/students', (req, res) => {
    res.json(students);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});