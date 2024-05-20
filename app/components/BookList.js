'use client';

import React, { useState, useEffect } from 'react';

const BookList = ({ books, onEdit, onDelete }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, [books]);

    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Book List</h1>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {books.map((book) => (
                        <div key={book._id} className="bg-white shadow-md rounded-lg p-4">
                            <h3 className="text-xl font-semibold">{book.title}</h3>
                            <p className="text-gray-600">{book.author}</p>
                            <p className="text-gray-600">{book.genre}</p>
                            <p className="text-gray-600">{book.yearPublished}</p>
                            <div className="mt-4 flex space-x-2">
                                <button
                                    onClick={() => onEdit(book)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => onDelete(book)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BookList;
