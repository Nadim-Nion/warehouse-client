import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageBooks = () => {
    const [books, setBooks] = useState([]);
    const [booksPerPage, setBooksPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);
    const { total } = useLoaderData();
    // const booksPerPage = 10;
    const numberOfPages = Math.ceil(total / booksPerPage);
    // console.log(numberOfPages);

    const pages = [...Array(numberOfPages).keys()];

    useEffect(() => {
        fetch('http://localhost:5000/books/all')
            .then(res => res.json())
            .then(data => {
                setBooks(data);
            })
    }, []);

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/books/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            // const remaining = books.filter(book => book._id !== _id)
                            const remaining = books.filter(book => book._id !== _id);
                            setBooks(remaining);
                        }
                    })

            }
        });
    }

    const handleBooksPerPage = event => {
        // console.log(event.target.innerText);
        const value = parseInt(event.target.innerText);
        setBooksPerPage(value);
        setCurrentPage(0);
    }

    return (
        <div className='ml-5 my-5'>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th className='text-xl font-bold text-black'>Name</th>
                            <th className='text-xl font-bold text-black'>Price</th>
                            <th className='text-xl font-bold text-black'>Quantity</th>
                            <th className='text-xl font-bold text-black'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books?.map(book => <tr key={book._id}>
                                <td className='text-xl'>{book.name}</td>
                                <td className='text-xl'>{book.price}</td>
                                <td className='text-xl'>{book.quantity}</td>
                                <td className='text-2xl'>
                                    <button onClick={() => handleDelete(book._id)} className="btn btn-square btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div className='text-center my-5'>
                <Link to="/addItems">
                    <button className="btn btn-info">Add New Book</button>
                </Link>
            </div>
            <p className='text-xl font-semibold text-center my-3'>Current Page: {currentPage}</p>
            <div className='flex justify-center items-center'>
                {
                    pages.map(page => <div key={page} className="join mr-2">
                        {/*  <button
                            onClick={() => setCurrentPage(page)}
                            className="join-item btn"
                        >{page}</button> */}
                        <input
                            onChange={() => setCurrentPage(page)}
                            className="join-item btn btn-square"
                            type="radio"
                            name="options"
                            aria-label={page}
                            checked={currentPage === page}
                        />
                    </div>)
                }
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1">Books Per Page</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={handleBooksPerPage}><a>5</a></li>
                        <li onClick={handleBooksPerPage}><a>10</a></li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default ManageBooks;