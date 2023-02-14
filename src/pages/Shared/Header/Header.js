import React, { useRef, useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "./Header.css";
import logo from '../../../images/logo.png'

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [isClose, setIsClose] = useState(true);
  const btn = useRef();
  const menu = useRef();

  const handleStickyNav = () => {
    if(window.scrollY > 50){
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
  }
  window.addEventListener('scroll', handleStickyNav);

  const handleMobileMenu = () => {
    menu.current.classList.toggle('hidden');
    menu.current.classList.toggle('flex');
    setIsClose(menu.current.classList.contains('hidden'));
  }
  const handleMenuClose = e => {
    if(e.currentTarget !== e.target && isClose===false ){
        menu.current.classList.toggle('hidden');
        menu.current.classList.toggle('flex');
        setIsClose(true)
    }
    e.stopPropagation();
}

  return (
    <>
      <div className={`grid grid-cols-12 md:px-6 px-3 ${navbar ? 'sticky top-0 bg-gray-100 shadow' : 'bg-gray-100'} py-2 z-10`}>
        <div className="md:col-span-3 col-span-4 font-mono text-xl">
          <img src={logo} alt="" className="lg:w-28 md:w-20 w-20" />
        </div>
        <i className="md:hidden flex text-xl col-span-8 justify-end items-center" ref={btn} onClick={handleMobileMenu}>{isClose ? <i class="fas fa-bars"></i> : <i class="fas fa-times"></i>}</i>
        <div className="md:col-span-9 col-span-12 grid grid-cols-10">
            <div className="md:flex md:flex-row flex-col hidden font-medium md:justify-end justify-center items-center lg:space-x-8 md:space-x-4 space-x-0 w-full md:col-span-10 col-span-12" ref={menu} onClick={handleMenuClose}>
                <Link smooth exact to="/home#banner" className="menu">Home</Link>
                <Link smooth to="/home#about" className="menu">About</Link>
                <Link smooth to="/home#services" className="menu">Services</Link>
                <Link smooth to="/home#portfolio" className="menu">Portfolio</Link>
                <Link smooth to="/blogs" className="menu">Blogs</Link>
                <Link smooth to="/home#contact" className="menu transition ease-in-out duration-150">Contact</Link>
                <a target="blank" href="https://drive.google.com/u/0/uc?id=1-evt0DvyIp6Mcxo4mUHJAcdja2yHLE-0&export=download" className="lg:px-4 px-2 py-0.5 bg-gray-600 text-white rounded resume-btn transition ease-linear duration-150" download>Resume</a>
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;
