import React, { useEffect, useState } from 'react';
import GenreCard from '../GenreCard/GenreCard';

const Genre = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetch('genre.json')
            .then(res => res.json())
            .then(data => setGenres(data))
    }, [])

    return (
        <div>
            <h2 className='text-4xl font-bold text-center mt-2'>Featured Genres</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mb-6'>
                {
                    genres.map(genre => <GenreCard
                        key={genre.id}
                        genre={genre}
                    ></GenreCard>)
                }
            </div>
        </div>
    );
};

export default Genre;