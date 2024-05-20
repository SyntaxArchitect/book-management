import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import BookList from '../components/BookList'; // Adjust the import path as necessary

jest.mock('axios');

const mockBooks = [
    {
        _id: '1',
        title: 'Book One',
        author: 'Author One',
        genre: 'Fiction',
        yearPublished: 2021,
    },
    {
        _id: '2',
        title: 'Book Two',
        author: 'Author Two',
        genre: 'Non-Fiction',
        yearPublished: 2020,
    },
];

const mockFetchBooks = jest.fn();
const mockOnEdit = jest.fn();

describe('BookList Component', () => {
    beforeEach(() => {
        render(<BookList onEdit={mockOnEdit} fetchBooks={mockFetchBooks} books={mockBooks} />);
    });

    test('renders book list', () => {
        mockBooks.forEach(book => {
            expect(screen.getByText(book.title)).toBeInTheDocument();
            expect(screen.getByText(book.author)).toBeInTheDocument();
            expect(screen.getByText(book.genre)).toBeInTheDocument();
            expect(screen.getByText(book.yearPublished.toString())).toBeInTheDocument();
        });
    });

    test('handles delete book', async () => {
        axios.delete.mockResolvedValue({ status: 200 });

        fireEvent.click(screen.getAllByText('Delete')[0]);

        await waitFor(() => {
            expect(axios.delete).toHaveBeenCalledWith('/api/books/1');
            expect(mockFetchBooks).toHaveBeenCalled();
        });
    });

    test('handles edit book', () => {
        fireEvent.click(screen.getAllByText('Edit')[0]);
        expect(mockOnEdit).toHaveBeenCalledWith(mockBooks[0]);
    });
});
