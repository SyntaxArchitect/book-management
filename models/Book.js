const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    yearPublished: { type: Number, required: true }
});

module.exports = mongoose.models.Book || mongoose.model('Book', BookSchema);
