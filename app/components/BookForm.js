'use client';
import React, { useState } from 'react';
import axios from 'axios';

const BookForm = ({ fetchBooks, onSubmit, book }) => {
    const [formData, setFormData] = useState({
        title: book?.title || '',
        author: book?.author || '',
        genre: book?.genre || '',
        yearPublished: book?.yearPublished || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            if (book) {
                await axios.put(`/api/books/${book._id}`, formData, config);
            } else {
                await axios.post('/api/books', formData, config);
            }
            fetchBooks();
            onSubmit();
        } catch (error) {
            console.error('Error submitting form', error);
        }
    };
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         if (book) {
    //             await axios.put(`/api/books/${book._id}`, formData);
    //         } else {
    //             await axios.post('/api/books', formData);
    //         }
    //         fetchBooks();
    //         onSubmit();
    //     } catch (error) {
    //         console.error('Error submitting form', error);
    //     }
    // };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">{book ? 'Edit Book' : 'Add New Book'}</h2>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="title"
                    id="title"
                    placeholder="Title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">Author</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="author"
                    id="author"
                    placeholder="Author"
                    required
                    value={formData.author}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="genre">Genre</label>
                <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="genre"
                    id="genre"
                    required
                    value={formData.genre}
                    onChange={handleChange}
                >
                    <option disabled value="">Select Genre</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Biography">Biography</option>
                    <option value="History">History</option>
                    <option value="Romance">Romance</option>
                    <option value="Thriller">Thriller</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="yearPublished">Year Published</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="yearPublished"
                    id="yearPublished"
                    placeholder="Year Published"
                    required
                    type="number"
                    value={formData.yearPublished}
                    onChange={handleChange}
                />
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
            >
                {book ? 'Update Book' : 'Add Book'}
            </button>
        </form>
    );
};

export default BookForm;
