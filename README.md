# Book Management Application

A web application for managing books. Users can view, add, edit, and delete books. Authentication is required for editing and deleting books.

## Live Demo

Check out the live demo of the application: [Book Management Live](https://book-management-red.vercel.app/)

## GitHub Repository

You can find the source code here: [GitHub Repository](https://github.com/codeArtCreator/book-management.git)

## Features

- View a list of books
- Search books by title
- Filter books by genre
- Add new books
- Edit existing books
- Delete books
- User authentication for editing and deleting books

## Tech Stack

- Next.js
- React
- MongoDB
- Mongoose
- Axios
- JWT (JSON Web Tokens) for authentication

## Getting Started

### Prerequisites

- Node.js installed on your local machine
- MongoDB Atlas account or a local MongoDB instance

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/codeArtCreator/book-management.git
   cd book-management
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your MongoDB connection string and JWT secret:

   ```plaintext
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret_key
   ```

4. Set up the initial admin user by running the setup script:

   ```bash
   npm run setup-admin
   ```

   This will create an admin user with the following credentials:

   - **Username:** admin
   - **Password:** admin

5. Insert sample books into the database by running the script:

   ```bash
   npm run insert-sample-books
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

### Authentication

- Login is required to edit or delete books.
- Use the default admin credentials to log in:
  - **Username:** admin
  - **Password:** admin

## API Endpoints

### GET `/api/books`

Retrieve a list of books.

### POST `/api/books`

Add a new book. Requires authentication.

### PUT `/api/books/:id`

Update an existing book. Requires authentication.

### DELETE `/api/books/:id`

Delete a book. Requires authentication.

## Components

### `components/BookForm.js`

Form for adding and editing books.

### `components/BookList.js`

Displays a list of books with options to edit or delete.

### `components/Modal.js`

Reusable modal component.

### `components/Login.js`

Login form for user authentication.

## Middleware

### `middleware/auth.js`

Middleware for handling JWT authentication.

## Database

### `models/Book.js`

Mongoose schema and model for books.

### `models/User.js`

Mongoose schema and model for users.

## Utils

### `utils/connectDB.js`

Utility for connecting to MongoDB.

## Scripts

### `scripts/setupAdmin.js`

Script to set up the initial admin user.

### `scripts/insertSampleBooks.js`

Script to insert initial sample books into the database.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

## License

This project is licensed under the MIT License.
