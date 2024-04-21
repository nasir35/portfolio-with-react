import React, { useState } from "react";
import "./SimpleNav.css";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

const SimpleNav = () => {
  const [navbar, setNavbar] = useState(false);

  const handleStickyNav = () => {
    if (window.scrollY > 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", handleStickyNav);

  return (
    <>
      <div
        className={`flex justify-between items-center md:px-6 px-2 ${
          navbar ? "sticky top-0 bg-gray-100 shadow" : "bg-gray-100"
        } py-2 z-10`}>
        <div className="md:col-span-3 col-span-4 font-mono text-xl">
          <Link to="/">
            <img src={logo} alt="" className="cursor-pointer lg:w-28 md:w-20 w-20" />
          </Link>
        </div>
        <div className="">
          <div className="flex font-qsand font-semibold md:justify-end justify-center items-center lg:space-x-8 md:space-x-4 space-x-0 w-full md:col-span-10 col-span-12">
            <Link exact="true" to="/" className="px-4 py-1 bg-[#2563EB] text-white rounded">
              Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleNav;
