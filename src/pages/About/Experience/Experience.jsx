import React from "react";
import "./Experience.css";
import fiverr from "../../../images/fiverr.png";
import uihutLogo from "../../../images/uihut-logo.png";

const Experience = () => {
  return (
    <div className="my-3 space-y-3">
      <div className="exp-div shadow-inner border border-[#3a84e1] ">
        <div className="badge px-5  py-3 text-[#3a84e1] text-lg font-medium font-roboto outline-none border-none mb-2">
          <a href="https://uihut.com/" target="_blank" className="flex gap-2 items-center cursor-pointer">
            <img src={uihutLogo} className="w-8" alt="fiver logo" /> UIHUT
          </a>
        </div>
        <div className="px-5">
          <p className="text-gray-600">
            <span className="block mb-2">
              <b>Designation:</b> Frontend Web Developer
            </span>
            I have worked as a part time remote employee for the company specially on their{" "}
            <a href="https://ezytor.com/" target="_blank" className="text-indigo-600 font-semibold underline italic">
              Ezytor
            </a>{" "}
            project. I have developed some Web Applications vanilla projects focusing on tailwind framework. It was a
            nice opportunity to learn peofessional coding and to gather knowledge of Teamwork.
            <span className="block mt-2">
              <b>Duration:</b> July 2023 - December 2023
            </span>
          </p>
          <br></br>
          <p className="font-medium italic">
            Referance:{" "}
            <a href="https://www.linkedin.com/in/sajibrahman206/" target="blank" className="text-blue-500 font-normal">
              Sajib Rahman - COO at UIHUT
            </a>
          </p>
        </div>
      </div>
      <div className="exp-div shadow-inner border border-[#1dbf73]">
        <div className="badge py-3 text-[#1dbf73]  text-lg font-medium font-roboto outline-none border-none mb-2">
          <a href="https://www.fiverr.com/" target="_blank" className="flex items-center cursor-pointer">
            <img src={fiverr} className="w-12" alt="fiver logo" /> fiverr
          </a>
        </div>
        <div className="px-5">
          <p className="text-gray-600">
            Worked on fiver on 2 projects! Both was PSD to HTML conversion related work. First one was a simple page
            design which consist of 4-5 sections. And the second one was a bit complex slider design. I developed the
            slider using Slick Slider.
          </p>
          <br></br>
          <p className="font-medium italic">
            Referance:{" "}
            <a href="https://www.fiverr.com/s/vXGkwD" target="_blank" className="text-blue-500 font-normal">
              My Fiverr Gig
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
