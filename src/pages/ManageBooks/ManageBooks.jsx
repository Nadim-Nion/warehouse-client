import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageBooks = () => {
    const loadedBooks = useLoaderData();
    // console.log(loadedBooks);

    const handleDelete = _id => {

        fetch(`http://localhost:5000/books/${_id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
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
                        /* Swal.fire({
                        title: "Deleted!",
                        text: "Your book has been deleted.",
                        icon: "success"
                        }); */
                        // if (data.deleteCount > 0) {

                        // }
                    }
                });
            })
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
                            loadedBooks.map(book => <tr key={book._id}>
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
        </div>
    );
};

export default ManageBooks;