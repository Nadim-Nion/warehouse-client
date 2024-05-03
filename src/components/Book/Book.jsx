import React, { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';
import { Link } from 'react-router-dom';

const Book = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/books/first-six')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <h2 className='text-4xl font-bold text-center mt-2'>Explore Our Books</h2>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-5 my-6 justify-center items-center mx-8'>
                {
                    books.map(book => <BookCard
                        key={book._id}
                        book={book}
                    ></BookCard>)
                }
            </div>
            {/* <div className='text-4xl font-bold text-center'>
                <button className="btn btn-active btn-link">Manage Books</button>
            </div> */}
            <div className='text-center mb-5'>
                <Link to="/manage-books">
                    <button className="btn btn-active btn-link font-bold text-2xl">
                        Manage Books
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default Book;