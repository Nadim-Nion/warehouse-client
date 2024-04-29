import React from 'react';
import error from '../../assets/not-found/error.jpg';

const ErrorPage = () => {
    return (
        <div className='grid justify-center items-center'>
            <div className='text-3xl font-semibold text-center mt-20'>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
            </div>
            <img src={error} alt="" className='h-[500px]' />
        </div>
    );
};

export default ErrorPage;