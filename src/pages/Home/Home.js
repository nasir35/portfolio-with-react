import React from 'react';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Banner from './Banner-section/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </div>
    );
};

export default Home;