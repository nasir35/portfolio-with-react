import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BorderBtn from '../../../component/BorderBtn';
import BtnWithBg from '../../../component/BtnWithBg';
import Footers from '../Footer/Footer';
import Header from '../Header/Header';

const NotFound = () => {
    const history = useNavigate();
    const back = () => {
        return history(-1);
    }
    return (
        <div>
            <Header></Header>
        <div className="bg-gray-800 md:p-24 sm:p-14 p-6">
            <h1 className="text-center text-white p-3 md:text-7xl sm:text-5xl text-4xl tracking-widest font-extrabold font-serif">404</h1>
            <h3 className=" text-yellow md:text-xl sm:text-base text-sm md:pt-8 sm:pt-6 pt-4 text-center">OOPS! Page not found! It doesn't exist or the owner removed the page.</h3>
            <div className="flex sm:justify-center justify-around pt-12">
                <button onClick={back} className="mr-2"><BtnWithBg>Go Back</BtnWithBg></button>
                <Link to="/home" ><BorderBtn>Home</BorderBtn></Link>
            </div>
        </div>
        <Footers></Footers>
        </div>
    );
};

export default NotFound;