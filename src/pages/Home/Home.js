import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Service-section/Services';
import Banner from './Banner-section/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Portfolio></Portfolio>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;