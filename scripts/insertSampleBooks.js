const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Book = require('../models/Book');
const connectDB = require('../utils/connectDB');

dotenv.config({ path: '.env.local' });

const books = [
    {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "genre": "Fiction",
        "yearPublished": 1960
    },
    {
        "title": "1984",
        "author": "George Orwell",
        "genre": "Science Fiction",
        "yearPublished": 1949
    },
    {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "genre": "Fiction",
        "yearPublished": 1925
    },
    {
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "genre": "Fiction",
        "yearPublished": 1951
    },
    {
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "genre": "Fantasy",
        "yearPublished": 1937
    },
    {
        "title": "Fahrenheit 451",
        "author": "Ray Bradbury",
        "genre": "Science Fiction",
        "yearPublished": 1953
    },
    {
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "genre": "Romance",
        "yearPublished": 1813
    },
    {
        "title": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "genre": "Fantasy",
        "yearPublished": 1954
    },
    {
        "title": "The Book Thief",
        "author": "Markus Zusak",
        "genre": "Historical Fiction",
        "yearPublished": 2005
    },
    {
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "genre": "Fantasy",
        "yearPublished": 1997
    },
    {
        "title": "Animal Farm",
        "author": "George Orwell",
        "genre": "Fiction",
        "yearPublished": 1945
    },
    {
        "title": "The Da Vinci Code",
        "author": "Dan Brown",
        "genre": "Thriller",
        "yearPublished": 2003
    },
    {
        "title": "The Alchemist",
        "author": "Paulo Coelho",
        "genre": "Fiction",
        "yearPublished": 1988
    },
    {
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "genre": "Science Fiction",
        "yearPublished": 1932
    },
    {
        "title": "Moby Dick",
        "author": "Herman Melville",
        "genre": "Fiction",
        "yearPublished": 1851
    },
    {
        "title": "War and Peace",
        "author": "Leo Tolstoy",
        "genre": "Historical Fiction",
        "yearPublished": 1869
    },
    {
        "title": "The Odyssey",
        "author": "Homer",
        "genre": "Classics",
        "yearPublished": -800
    },
    {
        "title": "Crime and Punishment",
        "author": "Fyodor Dostoevsky",
        "genre": "Fiction",
        "yearPublished": 1866
    },
    {
        "title": "Wuthering Heights",
        "author": "Emily Brontë",
        "genre": "Romance",
        "yearPublished": 1847
    },
    {
        "title": "The Adventures of Huckleberry Finn",
        "author": "Mark Twain",
        "genre": "Fiction",
        "yearPublished": 1884
    },
    {
        "title": "Jane Eyre",
        "author": "Charlotte Brontë",
        "genre": "Romance",
        "yearPublished": 1847
    },
    {
        "title": "The Kite Runner",
        "author": "Khaled Hosseini",
        "genre": "Historical Fiction",
        "yearPublished": 2003
    },
    {
        "title": "Les Misérables",
        "author": "Victor Hugo",
        "genre": "Historical Fiction",
        "yearPublished": 1862
    },
    {
        "title": "The Chronicles of Narnia",
        "author": "C.S. Lewis",
        "genre": "Fantasy",
        "yearPublished": 1950
    },
    {
        "title": "The Shining",
        "author": "Stephen King",
        "genre": "Horror",
        "yearPublished": 1977
    },
    {
        "title": "Frankenstein",
        "author": "Mary Shelley",
        "genre": "Horror",
        "yearPublished": 1818
    },
    {
        "title": "A Tale of Two Cities",
        "author": "Charles Dickens",
        "genre": "Historical Fiction",
        "yearPublished": 1859
    },
    {
        "title": "The Handmaid's Tale",
        "author": "Margaret Atwood",
        "genre": "Dystopian",
        "yearPublished": 1985
    },
    {
        "title": "The Picture of Dorian Gray",
        "author": "Oscar Wilde",
        "genre": "Fiction",
        "yearPublished": 1890
    },
    {
        "title": "Dracula",
        "author": "Bram Stoker",
        "genre": "Horror",
        "yearPublished": 1897
    },
    {
        "title": "The Grapes of Wrath",
        "author": "John Steinbeck",
        "genre": "Fiction",
        "yearPublished": 1939
    },
    {
        "title": "The Hunger Games",
        "author": "Suzanne Collins",
        "genre": "Dystopian",
        "yearPublished": 2008
    },
    {
        "title": "Catch-22",
        "author": "Joseph Heller",
        "genre": "Fiction",
        "yearPublished": 1961
    },
    {
        "title": "The Fault in Our Stars",
        "author": "John Green",
        "genre": "Romance",
        "yearPublished": 2012
    },
    {
        "title": "The Brothers Karamazov",
        "author": "Fyodor Dostoevsky",
        "genre": "Fiction",
        "yearPublished": 1880
    },
    {
        "title": "The Count of Monte Cristo",
        "author": "Alexandre Dumas",
        "genre": "Historical Fiction",
        "yearPublished": 1844
    },
    {
        "title": "Gone with the Wind",
        "author": "Margaret Mitchell",
        "genre": "Historical Fiction",
        "yearPublished": 1936
    },
    {
        "title": "Memoirs of a Geisha",
        "author": "Arthur Golden",
        "genre": "Historical Fiction",
        "yearPublished": 1997
    },
    {
        "title": "One Hundred Years of Solitude",
        "author": "Gabriel Garcia Marquez",
        "genre": "Magical Realism",
        "yearPublished": 1967
    },
    {
        "title": "The Hitchhiker's Guide to the Galaxy",
        "author": "Douglas Adams",
        "genre": "Science Fiction",
        "yearPublished": 1979
    },
    {
        "title": "Slaughterhouse-Five",
        "author": "Kurt Vonnegut",
        "genre": "Science Fiction",
        "yearPublished": 1969
    },
    {
        "title": "Beloved",
        "author": "Toni Morrison",
        "genre": "Historical Fiction",
        "yearPublished": 1987
    },
    {
        "title": "Don Quixote",
        "author": "Miguel de Cervantes",
        "genre": "Classics",
        "yearPublished": 1605
    },
    {
        "title": "The Secret Garden",
        "author": "Frances Hodgson Burnett",
        "genre": "Children's",
        "yearPublished": 1911
    },
    {
        "title": "The Giver",
        "author": "Lois Lowry",
        "genre": "Dystopian",
        "yearPublished": 1993
    },
    {
        "title": "The Road",
        "author": "Cormac McCarthy",
        "genre": "Dystopian",
        "yearPublished": 2006
    },
    {
        "title": "The Girl with the Dragon Tattoo",
        "author": "Stieg Larsson",
        "genre": "Thriller",
        "yearPublished": 2005
    },
    {
        "title": "Life of Pi",
        "author": "Yann Martel",
        "genre": "Adventure",
        "yearPublished": 2001
    },
    {
        "title": "The Time Traveler's Wife",
        "author": "Audrey Niffenegger",
        "genre": "Romance",
        "yearPublished": 2003
    },
    {
        "title": "The Maze Runner",
        "author": "James Dashner",
        "genre": "Dystopian",
        "yearPublished": 2009
    }
]

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
