import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { MdDelete } from "react-icons/md";

const ManageBooks = () => {
    const loadedBooks = useLoaderData();
    // console.log(loadedBooks);
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
                                    <MdDelete />
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