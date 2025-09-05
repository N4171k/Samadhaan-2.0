// models/note.model.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;

// server.js (additions)

// --- API Routes ---
const notesRouter = require('./routes/notes');
app.use('/notes', notesRouter); // All routes in notes.js will be prefixed with /notes