import React from 'react';
import Banner from '../../../components/Banner/Banner';
import Genre from '../../../components/Genre/Genre';
import Review from '../../../components/Review/Review';
import Book from '../../../components/Book/Book';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Genre></Genre>
            <Book></Book>
            <Review></Review>
        </div>
    );
};

export default Home;