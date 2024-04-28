import React from 'react';
import Banner from '../../../components/Banner/Banner';
import Genre from '../../../components/Genre/Genre';
import Review from '../../../components/Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Genre></Genre>
            <Review></Review>
        </div>
    );
};

export default Home;