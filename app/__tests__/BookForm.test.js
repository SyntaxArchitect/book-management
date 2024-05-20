import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import BookForm from '../components/BookForm'; // Adjust the path accordingly

const mockAxios = new MockAdapter(axios);

describe('BookForm Component', () => {
    const fetchBooks = jest.fn();
    const onSubmit = jest.fn();

    beforeEach(() => {
        fetchBooks.mockClear();
        onSubmit.mockClear();
        mockAxios.reset();
    });

    it('should render the form with initial values', () => {
        render(<BookForm fetchBooks={fetchBooks} onSubmit={onSubmit} />);

        expect(screen.getByPlaceholderText('Title')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Author')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Year Published')).toBeInTheDocument();
        expect(screen.getByText('Add New Book')).toBeInTheDocument();
    });

    it('should handle form submission for adding a new book', async () => {
        mockAxios.onPost('/api/books').reply(200);

        render(<BookForm fetchBooks={fetchBooks} onSubmit={onSubmit} />);

        userEvent.type(screen.getByPlaceholderText('Title'), 'New Book');
        userEvent.type(screen.getByPlaceholderText('Author'), 'John Doe');
        userEvent.selectOptions(screen.getByLabelText('Genre'), 'Fiction');
        userEvent.type(screen.getByPlaceholderText('Year Published'), '2023');

        fireEvent.submit(screen.getByRole('button', { name: /add book/i }));

        await waitFor(() => {
            expect(fetchBooks).toHaveBeenCalled();
            expect(onSubmit).toHaveBeenCalled();
        });
    });

    it('should handle form submission for updating an existing book', async () => {
        const book = { _id: '1', title: 'Existing Book', author: 'Jane Doe', genre: 'Mystery', yearPublished: '2020' };
        mockAxios.onPut(`/api/books/${book._id}`).reply(200);

        render(<BookForm book={book} fetchBooks={fetchBooks} onSubmit={onSubmit} />);

        expect(screen.getByPlaceholderText('Title').value).toBe('Existing Book');
        expect(screen.getByPlaceholderText('Author').value).toBe('Jane Doe');
        expect(screen.getByDisplayValue('Mystery')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Year Published').value).toBe('2020');

        userEvent.clear(screen.getByPlaceholderText('Title'));
        userEvent.type(screen.getByPlaceholderText('Title'), 'Updated Book');

        fireEvent.submit(screen.getByRole('button', { name: /update book/i }));

        await waitFor(() => {
            expect(fetchBooks).toHaveBeenCalled();
            expect(onSubmit).toHaveBeenCalled();
        });
    });

    it('should handle API errors gracefully', async () => {
        mockAxios.onPost('/api/books').reply(500);

        render(<BookForm fetchBooks={fetchBooks} onSubmit={onSubmit} />);

        userEvent.type(screen.getByPlaceholderText('Title'), 'New Book');
        userEvent.type(screen.getByPlaceholderText('Author'), 'John Doe');
        userEvent.selectOptions(screen.getByLabelText('Genre'), 'Fiction');
        userEvent.type(screen.getByPlaceholderText('Year Published'), '2023');

        fireEvent.submit(screen.getByRole('button', { name: /add book/i }));

        await waitFor(() => {
            expect(fetchBooks).not.toHaveBeenCalled();
            expect(onSubmit).not.toHaveBeenCalled();
        });
    });
});
