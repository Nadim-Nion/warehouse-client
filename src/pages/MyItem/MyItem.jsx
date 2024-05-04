import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const MyItem = () => {
    const [myItems, setMyItems] = useState([]);
    const { user } = useContext(AuthContext);
    const [updatedItems, setUpdatedItems] = useState([]);
    console.log(updatedItems);

    useEffect(() => {
        fetch(`http://localhost:5000/newAddedBooks?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setMyItems(data);
            })
    }, [user.email])

    const handleDelete = _id => {
        console.log(_id);

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

                fetch(`http://localhost:5000/newAddedBooks/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your book has been deleted.",
                                icon: "success"
                            });

                            // console.log('Deleted successfully');
                            const remaining = myItems.filter(item => item._id !== _id);
                            setUpdatedItems(remaining);
                        }
                    })

            }
        });
    }

    return (
        <div className='my-7 mx-5'>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th className='text-xl font-bold text-black'>Name</th>
                            <th className='text-xl font-bold text-black'>Price</th>
                            <th className='text-xl font-bold text-black'>Quantity</th>
                            <th className='text-xl font-bold text-black'>Supplier Name</th>
                            <th className='text-xl font-bold text-black'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myItems.map(item => <tr key={item._id}>
                                <td className='text-xl'>{item.name}</td>
                                <td className='text-xl'>{item.price}</td>
                                <td className='text-xl'>{item.quantity}</td>
                                <td className='text-xl'>{item.supplier}</td>
                                <td className='text-2xl'>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-square btn-outline">
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

export default MyItem;