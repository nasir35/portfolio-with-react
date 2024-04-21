import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../../images/logo.png";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navSticky, setNavSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleStickyNav = () => {
    if (window.scrollY > 50) {
      setNavSticky(true);
    } else {
      setNavSticky(false);
    }
  };
  window.addEventListener("scroll", handleStickyNav);

  const handleMobileMenu = () => {
    const mobileNav = document.getElementById("mobile-nav");
    mobileNav.classList.toggle("show");
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      // document.getElementById("nav-overlay").classList.toggle("hidden");
    } else {
      document.body.style.overflow = "auto";
      // document.getElementById("nav-overlay").classList.toggle("hidden");
    }
  }, [isMenuOpen]);
  const Navoptions = (
    <div id="nav-links" className="hidden md:flex lg:gap-4 gap-2 font-qsand font-semibold text-base">
      <ScrollLink exact="true" to="banner" smooth={true} offset={-50} duration={300} className="nav-link">
        Home
      </ScrollLink>
      <ScrollLink to="about" smooth={true} offset={-50} duration={300} className="nav-link">
        About
      </ScrollLink>
      <ScrollLink to="portfolio" smooth={true} offset={-50} duration={300} className="nav-link">
        Portfolio
      </ScrollLink>
      <ScrollLink to="services" smooth={true} offset={-50} duration={300} className="nav-link">
        Services
      </ScrollLink>
      <ScrollLink to="contact" smooth={true} offset={-50} duration={300} className="nav-link">
        Contact
      </ScrollLink>
      <a
        target="blank"
        href="https://drive.google.com/uc?export=download&id=1RkaYQItWkrkbgLlmHonIe53M1jip6Qjj"
        className="lg:px-4 px-3 py-1 bg-gray-600 hover:bg-indigo-600 font-qsand font-semibold text-white rounded transition ease-linear duration-150"
        download>
        Resume
      </a>
    </div>
  );
  return (
    <>
      {/* <div className="nav-overlay hidden transition duration-300" id="nav-overlay"></div> */}
      <nav className={`${navSticky ? "sticky top-0  shadow" : ""} bg-gray-100 z-10 px-3 md:px-6 py-2 relative`}>
        <div id="pc-nav" className="flex justify-between items-center">
          <Link to="/" className="cursor-pointer max-w-[120px]">
            <img src={logo} alt="logo" />
          </Link>
          <button className="cursor-pointer" onClick={handleMobileMenu}>
            <i className="flex md:hidden fas fa-bars scale-110"></i>
          </button>
          {Navoptions}
        </div>

        <div
          id="mobile-nav"
          className={`bg-gray-100 backdrop-blur-sm z-10 px-3 md:px-6 pt-2 pb-4 absolute w-[100%] top-0 mobile-nav transition-all duration-300`}>
          <div className="flex justify-between items-center mb-3">
            <Link to="/" className="cursor-pointer max-w-[120px]">
              <img src={logo} alt="logo" />
            </Link>
            <button
              className="cursor-pointer hover:bg-red-600 px-[14px] py-[11px] rounded-full hover:text-white"
              onClick={handleMobileMenu}>
              <i className="flex md:hidden fas fa-times scale-125"></i>
            </button>
          </div>
          {Navoptions}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
