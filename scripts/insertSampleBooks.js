const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Book = require('../models/Book');
const connectDB = require('../utils/connectDB');

dotenv.config({ path: '.env.local' });

const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        yearPublished: 1960,
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        yearPublished: 1949,
    },
    // Add more books here
];

const insertBooks = async () => {
    try {
        await connectDB();

        for (const book of books) {
            const bookExists = await Book.findOne({ title: book.title });
            if (bookExists) {
                console.log(`Book "${book.title}" already exists`);
            } else {
                await Book.create(book);
                console.log(`Book "${book.title}" inserted successfully!`);
            }
        }
    } catch (error) {
        console.error('Error inserting sample books:', error);
    } finally {
        mongoose.connection.close();
    }
};

insertBooks().catch(err => console.error(err));
