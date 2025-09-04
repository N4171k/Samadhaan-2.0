// index.js

// 1. Import Express
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies. This is crucial for POST and PUT requests.
app.use(express.json());

// 2. In-Memory Data Store (like a simple database)
let students = [
    { id: 1, name: 'Alice', age: 22, major: 'Computer Science' },
    { id: 2, name: 'Bob', age: 21, major: 'Mechanical Engineering' },
    { id: 3, name: 'Charlie', age: 23, major: 'History' }
];

// A simple counter to generate unique IDs for new students
let nextId = 4;

// 3. Define the CRUD Routes

// --- READ: GET all students ---
// GET /api/students
app.get('/api/students', (req, res) => {
    res.json(students);
});

// --- READ: GET a single student by ID ---
// GET /api/students/:id
app.get('/api/students/:id', (req, res) => {
    // Find the student in the array. req.params.id will be a string.
    const studentId = parseInt(req.params.id, 10);
    const student = students.find(s => s.id === studentId);

    if (student) {
        res.json(student);
    } else {
        // If no student is found, send a 404 Not Found status
        res.status(404).json({ message: 'Student not found' });
    }
});

// --- CREATE: POST a new student ---
// POST /api/students
app.post('/api/students', (req, res) => {
    // Basic validation
    if (!req.body.name || !req.body.major) {
        return res.status(400).json({ message: 'Name and major are required' });
    }

    const newStudent = {
        id: nextId++,
        name: req.body.name,
        age: req.body.age || null, // Age is optional
        major: req.body.major
    };

    students.push(newStudent);
    // Send a 201 Created status and the new student object
    res.status(201).json(newStudent);
});

// --- UPDATE: PUT (replace) an existing student's data ---
// PUT /api/students/:id
app.put('/api/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id, 10);
    const studentIndex = students.findIndex(s => s.id === studentId);

    if (studentIndex !== -1) {
        // Basic validation
        if (!req.body.name || !req.body.major) {
            return res.status(400).json({ message: 'Name and major are required' });
        }
        
        const updatedStudent = {
            id: studentId,
            name: req.body.name,
            age: req.body.age,
            major: req.body.major
        };

        students[studentIndex] = updatedStudent;
        res.json(updatedStudent);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

// --- DELETE: DELETE a student by ID ---
// DELETE /api/students/:id
app.delete('/api/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id, 10);
    const studentIndex = students.findIndex(s => s.id === studentId);

    if (studentIndex !== -1) {
        const deletedStudent = students.splice(studentIndex, 1);
        res.json({ message: 'Student deleted successfully', student: deletedStudent[0] });
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});


// 4. Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});