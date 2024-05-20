import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Book from '../../../models/Book';

const connectDB = async () => {
    if (mongoose.connections[0].readyState) return;
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

export async function GET(request) {
    await connectDB();
    const url = new URL(request.url);
    const searchQuery = url.searchParams.get('searchQuery') || '';
    const genre = url.searchParams.get('genre') || '';
    const page = parseInt(url.searchParams.get('page')) || 1;
    const limit = 9;

    const query = {
        ...(searchQuery && { title: { $regex: searchQuery, $options: 'i' } }),
        ...(genre && { genre }),
    };

    const books = await Book.find(query)
        .skip((page - 1) * limit)
        .limit(limit);
    const totalBooks = await Book.countDocuments(query);
    const totalPages = Math.ceil(totalBooks / limit);

    return NextResponse.json({
        books,
        currentPage: page,
        totalPages,
    });
}

export async function POST(request) {
    await connectDB();
    const { title, author, genre, yearPublished } = await request.json();
    const newBook = new Book({ title, author, genre, yearPublished });
    await newBook.save();
    return NextResponse.json(newBook);
}
