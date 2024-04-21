import React from "react";
import logo1 from "../../../images/logo.png";
import { Link } from "react-router-dom";

const Footers = () => {
  return (
    <div className="md:p-10 sm:p-5 p-3 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-3 bg-gray-200">
      <div id="logo-slogan-section" className="col-span-1">
        <Link to="/">
          <img src={logo1} className="lg:w-1/3 w-2/4 py-4 cursor-pointer" alt="logo" />
        </Link>
        <p className="text-gray-600 text-sm mx-4">
          Inventive front-end web developer with strong working knowledge. Ready to apply my passion for coding to a
          talented engineering team to develop quality solutions.
        </p>
      </div>
      <div id="address-section" className="col-span-1">
        <h2 className="md:text-2xl text-xl font-medium text-stromboli mb-3">Connect With Me</h2>
        <a href="mailto: nasir2242001@gmail.com" className=" md:text-base text-sm font-medium">
          &emsp;<i className="far fa-envelope pb-2 text-green-900"></i> <span className="font-medium"></span> Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/nasir358/"
          target="blank"
          className="block md:text-base text-sm font-medium">
          &emsp;<i className="fab fa-linkedin-in pb-2 text-indigo-500"></i> <span className="font-medium"></span>Get
          Connected in Linkedin
        </a>
        <a href="https://github.com/nasir35" target="blank" className="block md:text-base text-sm font-medium">
          &emsp;<i className="fab fa-github-square font-medium pb-2 text-gray-900"></i>{" "}
          <span className="font-medium"></span>Follow on GitHub
        </a>
        <a href="tel:+8801690215534" className=" font-medium">
          &emsp;<i className="fas fa-phone-alt text-green-custom text-sm"></i> (+880) 1690 215534
        </a>
      </div>
      <div id="links-section" className="col-span-1">
        <h2 className="md:text-2xl text-xl font-medium text-stromboli pb-3">Useful links</h2>
        <Link to="/" className="block cursor-pointer">
          &emsp;<i className="fas fa-link"></i> Home
        </Link>
        <a
          href="https://drive.google.com/uc?export=download&id=1RkaYQItWkrkbgLlmHonIe53M1jip6Qjj"
          target="blank"
          className="block">
          &emsp;<i className="fas fa-link"></i> Resume
        </a>
      </div>
      <div className="md:col-span-3 sm:col-span-2 col-span-1 pt-4">
        <p
          className="max-w-md mx-auto text-center sm:text-base text-sm text-gray-800 border-b-2 border-gray-700"
          style={{ lineHeight: 0.1 }}>
          <span className="bg-gray-200 px-2"> 2021-{new Date().getFullYear()} &copy; All Rights reserved - Nasir</span>
        </p>
      </div>
    </div>
  );
};

export default Footers;
