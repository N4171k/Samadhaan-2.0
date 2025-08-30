const express = require('express');
const app = express();
const port = 3000;
const students = [
    { id: 1, name: 'naitik', major: 'Computer Science' },
    { id: 2, name: 'riya', major: 'Electrical Engineering' },
    { id: 3, name: 'utakarsh', major: 'Mathematics' }
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
