import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
    const loadedBook = useLoaderData();
    // console.log(loadedBook);
    const { _id, name, image, description, price, quantity, supplier, sold } = loadedBook;
    const [newQuantity, setNewQuantity] = useState(quantity);

    const handleDelivered = (_id) => {

        fetch(`http://localhost:5000/books/${_id}/delivered`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            // body: JSON.stringify({})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setNewQuantity(prevQuantity => prevQuantity - 1);
                console.log("The value of newQuantity:", newQuantity);
            })
    }

    // Use useEffect to log newQuantity whenever it changes
    useEffect(() => {
        console.log("Updated newQuantity:", newQuantity);
    }, [newQuantity]);

    return (
        <div className='flex justify-center items-center my-7'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl font-bold">{name}</h2>
                    <p className='text-lg'>Product ID: {_id}</p>
                    <p className='text-lg'>{description}</p>
                    <p className='text-lg'>Supplier Name: {supplier}</p>
                    <p className='text-lg'>Sold: {sold}</p>
                    <p className='text-lg font-semibold transition-colors duration-300 hover:text-emerald-700'>Quantity: {quantity}</p>
                    <p className='text-lg font-semibold transition-colors duration-300 hover:text-emerald-700'>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelivered(_id)} className="btn btn-primary">Delivered</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;