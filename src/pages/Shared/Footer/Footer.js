import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="grid grid-cols-12 px-3 gap-3 bg-gray-50">
            <div className="md:col-span-5 col-span-12">
                <h2 className="text-xl text-gray-800">Md Nasir Ahmed</h2>
                <p>I am an inventive frontend developer. I love to design and develop! Trying to contribute in open source.</p>
            </div>
            <div className="md:col-span-3 col-span-12">
                <h2 className="text-xl text-gray-800">Useful links</h2>
                <div className="flex md:flex-row flex-col items-center">
                    <button>Resume</button>
                    <NavLink to="/contact">Hire Me</NavLink>
                    <NavLink to="/contact">Portfolio</NavLink>
                    <NavLink to="/contact">Services</NavLink>
                    <NavLink to="/contact">GitHub</NavLink>
                </div>
            </div>
            <div className="md:col-span-4 col-span-12">
                <h2 className="text-xl text-gray-800">Connect with me</h2>
                <button>Linkedin</button>
                <button>Facebook</button>
                <button>Twitter</button>
                <button>GitHub</button>
            </div>
            
        </div>
    );
};

export default Footer;