import React from 'react';

const GenreCard = ({ genre }) => {
    const { bookName, authorName, category, image } = genre;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 h-[500px]">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h3 className="card-title text-2xl font-bold">{bookName}</h3>
                    <p>Author: {authorName}</p>
                    <p>Genre: {category}</p>
                    <div className="card-actions">
                        <button className="btn btn-info">Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GenreCard;