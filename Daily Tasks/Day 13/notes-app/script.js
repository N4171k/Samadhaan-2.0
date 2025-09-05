// script.js

const API_URL = 'http://localhost:5000/notes'; // Our backend API URL

const notesContainer = document.getElementById('notes-container');
const noteForm = document.getElementById('note-form');
const noteId = document.getElementById('note-id');
const noteTitle = document.getElementById('note-title');
const noteContent = document.getElementById('note-content');

// READ: Fetch all notes from the API and display them
async function fetchNotes() {
    notesContainer.innerHTML = ''; // Clear current notes
    const response = await fetch(API_URL);
    const notes = await response.json();

    notes.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
            <div class="note-actions">
                <button class="edit-btn" onclick="editNote('${note._id}', '${note.title}', '${note.content}')">Edit</button>
                <button onclick="deleteNote('${note._id}')">Delete</button>
            </div>
        `;
        notesContainer.appendChild(noteElement);
    });
}

// CREATE & UPDATE: Handle form submission
noteForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = noteId.value;
    const title = noteTitle.value;
    const content = noteContent.value;

    const method = id ? 'POST' : 'POST'; // Mongoose handles both via save()
    const url = id ? `${API_URL}/update/${id}` : `${API_URL}/add`;

    await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
    });

    // Reset form and refresh notes
    noteId.value = '';
    noteTitle.value = '';
    noteContent.value = '';
    fetchNotes();
});

// Populate form for editing
function editNote(id, title, content) {
    noteId.value = id;
    noteTitle.value = title;
    noteContent.value = content;
    window.scrollTo(0, 0); // Scroll to top to see the form
}

// DELETE: Delete a note
async function deleteNote(id) {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    fetchNotes(); // Refresh notes list
}


// Initial fetch of notes when the page loads
fetchNotes();