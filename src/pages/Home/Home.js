import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Service-section/Services';
import Footers from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Banner from './Banner-section/Banner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Portfolio></Portfolio>
            <Services></Services>
            <Contact></Contact>
            <Footers></Footers>
        </div>
    );
};

export default Home;