import React from 'react';

const BookCard = ({ book }) => {
    const { name, image, description, price, quantity, supplier } = book;

    return (
        <div className="flex justify-center items-center">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className='h-[550px] w-[550px]'>
                    <img src={image} alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{name}</h2>
                    <p>{description}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier: {supplier}</p>
                    <p className='text-xl font-bold'>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-info">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;