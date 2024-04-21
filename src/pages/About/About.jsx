import React from "react";
import "./About.css";
import { NavLink, Outlet } from "react-router-dom";
import designingGif from "../../images/website-designing.gif";

const About = () => {
  return (
    <div id="about" className="bg-gray-500 lg:py-12 md:py-9 py-6 shadow" style={{ backgroundColor: "#F7F7F7" }}>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="px-4 py-2">
          <img src={designingGif} alt="vector gif" />
        </div>
        <div className="flex flex-col mt-4">
          <div className="link-container bg-[#D4EEF9] flex w-full lg:space-x-4 md:space-x-1 space-x-2 lg:py-3 py-2 px-1 lg:text-base md:text-sm sm:text-base text-sm">
            <NavLink to="/" exact="true" id="firstLink" className={`tab-option uppercase`}>
              About me
            </NavLink>
            <NavLink to="skills" className="tab-option uppercase">
              Skills
            </NavLink>
            <NavLink to="experience" className="tab-option uppercase">
              Experiences
            </NavLink>
            <NavLink to="education" className="tab-option uppercase">
              Education
            </NavLink>
          </div>
          <div className="md:px-0 px-3">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
