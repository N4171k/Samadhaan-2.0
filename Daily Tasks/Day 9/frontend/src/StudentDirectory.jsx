// src/StudentDirectory.jsx
import React, { useState, useEffect } from 'react';
import './StudentDirectory.css'; // We'll create this file for styling

function StudentDirectory() {
    // 1. Create state to store our students list. Starts as an empty array.
    const [students, setStudents] = useState([]);

    // 2. useEffect runs after the component mounts.
    // The empty array [] at the end means it only runs ONCE.
    useEffect(() => {
        // An async function to get the data
        const fetchStudents = async () => {
            try {
                // 3. Use fetch to make a GET request to our backend API
                const response = await fetch('http://localhost:3000/api/students');
                const data = await response.json();

                // 4. Update the state with the data from the API
                setStudents(data);
            } catch (error) {
                console.error("Failed to fetch students:", error);
            }
        };

        fetchStudents(); // Call the function
    }, []);

    // 5. Render the component
    return (
        <div className="directory-container">
            <h1>Student Directory</h1>
            <ul className="student-list">
                {/* Map over the students array and create a list item for each one */}
                {students.map((student) => (
                    <li key={student.id} className="student-item">
                        <h3>{student.name}</h3>
                        <p>{student.major}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentDirectory;