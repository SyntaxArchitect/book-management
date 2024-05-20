const { NextResponse } = require('next/server');
const mongoose = require('mongoose');
const Book = require('../../../../models/Book');
const connectDB = require('../../../../utils/connectDB');
const authMiddleware = require('../../../middleware/auth');

require('dotenv').config({ path: '.env.local' });

export async function GET(request, { params }) {
    await connectDB();
    const book = await Book.findById(params.id);
    return NextResponse.json(book);
}

export async function PUT(request, { params }) {
    await connectDB();

    const authResponse = authMiddleware(request);
    if (authResponse.status === 401) return authResponse;

    try {
        const { title, author, genre, yearPublished } = await request.json();
        const book = await Book.findByIdAndUpdate(
            params.id,
            { title, author, genre, yearPublished },
            { new: true }
        );

        if (!book) {
            return NextResponse.json({ message: 'Book not found' }, { status: 404 });
        }

        return NextResponse.json(book);
    } catch (error) {
        console.error('Error updating book:', error);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    const authResponse = authMiddleware(request);
    if (authResponse.status === 401) return authResponse;
    await connectDB();
    await Book.findByIdAndDelete(params.id);
    return NextResponse.json({ message: 'Book deleted' });
}
