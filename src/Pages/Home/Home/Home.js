import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Inspiring from '../Inspiring/Inspiring';
import Programs from '../Programs/Programs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Programs></Programs>
            <Inspiring></Inspiring>
            <About></About>
        </div>
    );
};

export default Home;