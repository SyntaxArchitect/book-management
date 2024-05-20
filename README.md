Certainly! Here's the full README file in Markdown format:

---

# Book Management Application

## Overview

This is a full-stack Book Management application built with Next.js, React, and MongoDB. The application allows users to perform CRUD (Create, Read, Update, Delete) operations on a list of books. It includes features such as searching for books, filtering by genre, pagination, and a modal form for adding and editing books.

## Features

- **Book List**: View a list of books with details like title, author, genre, and year published.
- **Add/Edit Book**: Add new books or edit existing ones using a modal form.
- **Delete Book**: Delete books from the list.
- **Search**: Search for books by title.
- **Filter by Genre**: Filter books based on genre.
- **Pagination**: Navigate through pages of books.
- **Responsive Design**: The application is responsive and works well on different screen sizes.

## Technologies Used

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API Routes, Express.js
- **Database**: MongoDB
- **HTTP Client**: Axios

## Installation

### Prerequisites

- Node.js (v14 or above)
- npm or yarn
- MongoDB instance (local or cloud)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/book-management-app.git
   cd book-management-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory and add your MongoDB URI:

   ```env
   MONGODB_URI=your_mongodb_uri
   ```

4. **Run the application:**

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

   The application will be running at `http://localhost:3000`.

## Project Structure

- `app/api/books/[id]/route.js`: API route for handling single book operations (GET, PUT, DELETE).
- `app/api/books/route.js`: API route for handling book collection operations (GET, POST).
- `app/layout.js`: Custom layout component for the application.
- `app/page.js`: Main page component rendering the book management interface.
- `components/BookForm.js`: Component for the book form used in the modal.
- `components/BookList.js`: Component for rendering the list of books.
- `components/Modal.js`: Modal component for the form.
- `components/Pagination.js`: Component for pagination controls.
- `models/Book.js`: Mongoose model for the Book schema.

## API Endpoints

### Get All Books

- **URL**: `/api/books`
- **Method**: GET
- **Query Params**:
  - `searchQuery` (optional): String to search for books by title.
  - `genre` (optional): String to filter books by genre.
  - `page` (optional): Page number for pagination.
- **Response**: JSON object with books, currentPage, and totalPages.

### Get Single Book

- **URL**: `/api/books/[id]`
- **Method**: GET
- **Response**: JSON object with the book details.

### Add New Book

- **URL**: `/api/books`
- **Method**: POST
- **Body**: JSON object with title, author, genre, and yearPublished.
- **Response**: JSON object with the created book.

### Update Book

- **URL**: `/api/books/[id]`
- **Method**: PUT
- **Body**: JSON object with title, author, genre, and yearPublished.
- **Response**: JSON object with the updated book.

### Delete Book

- **URL**: `/api/books/[id]`
- **Method**: DELETE
- **Response**: JSON object with a message indicating successful deletion.

## How to Use

1. **View Books**: The main page displays a list of books with options to search, filter, and paginate through the list.
2. **Add a Book**: Click on the "Add New Book" button to open the modal form. Fill in the details and submit to add a new book.
3. **Edit a Book**: Click the "Edit" button next to a book to open the modal form with the book's details. Modify the details and submit to update the book.
4. **Delete a Book**: Click the "Delete" button next to a book to remove it from the list.
5. **Search and Filter**: Use the search input to find books by title and the genre dropdown to filter books by genre.
6. **Pagination**: Navigate through the pages using the pagination controls at the bottom of the list.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Contact

For any questions or suggestions, feel free to contact me at rakeshpr369@gmail.com.

```

```
