import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Book from '../../../../models/Book';

const connectDB = async () => {
    if (mongoose.connections[0].readyState) return;
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

export async function GET(request, { params }) {
    await connectDB();
    const book = await Book.findById(params.id);
    return NextResponse.json(book);
}

export async function PUT(request, { params }) {
    await connectDB();
    const { title, author, genre, yearPublished } = await request.json();
    const book = await Book.findByIdAndUpdate(params.id, { title, author, genre, yearPublished }, { new: true });
    return NextResponse.json(book);
}

export async function DELETE(request, { params }) {
    await connectDB();
    await Book.findByIdAndDelete(params.id);
    return NextResponse.json({ message: 'Book deleted' });
}
