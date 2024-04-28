import React from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


const ReviewCard = ({ review }) => {
    const { image, bookName, authorName, category, comments, rating } = review;
    return (
        <div className='flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className='h-[550px]'>
                    <img src={image} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">
                        {bookName}
                    </h2>
                    <p>Author: {authorName}</p>
                    <p>Genre: {category}</p>
                    <p>{comments}</p>
                    <div className="card-actions justify-end">
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={rating}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;