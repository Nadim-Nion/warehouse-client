import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import RestockBook from './RestockBook/RestockBook';
import { QuantityContext } from '../../providers/QuantityProvider';

const SingleBook = () => {
    // const loadedBook = useLoaderData();
    // const { _id, name, image, description, price, quantity, supplier, sold } = loadedBook;
    // const [newQuantity, setNewQuantity] = useState(quantity);

    const { newQuantity, setNewQuantity } = useContext(QuantityContext);
    const [book, setBook] = useState({});
    const { _id, name, image, description, price, quantity, supplier, sold } = book;
    const params = useParams();

    useEffect(() => {
        fetch(`https://warehouse-server-zeta.vercel.app/books/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setBook(data)
            })
    }, [params.id, newQuantity])


    const handleDelivered = async (_id) => {

        fetch(`https://warehouse-server-zeta.vercel.app/books/${_id}/delivered`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            // body: JSON.stringify({})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setNewQuantity(data.quantity);
                // setNewQuantity(newQuantity - 1);
                console.log("The value of newQuantity:", newQuantity);
            })
    }

    // Use useEffect to log newQuantity whenever it changes
    useEffect(() => {
        console.log("Updated newQuantity:", newQuantity);
    }, [newQuantity]);



    return (
        <div className='flex justify-center items-center my-7 flex-col lg:flex-row-reverse'>
            <RestockBook book={book}></RestockBook>
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
                    <div className="card-actions justify-between">
                        <div>
                            <Link to="/manage-books">
                                <button className="btn btn-active btn-link font-bold text-2xl">
                                    Manage Books
                                </button>
                            </Link>
                        </div>
                        <button onClick={() => handleDelivered(_id)} className="btn btn-info">Delivered</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleBook;