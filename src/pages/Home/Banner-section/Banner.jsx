import React from "react";
import Typewriter from "typewriter-effect";
import webDeveloper from "../../../images/web-developer.jpg";
import { Link as ScrollLink } from "react-scroll";
import bannerBg from "../../../images/banner-bg.jpg";
const Banner = () => {
  return (
    <div
      id="banner"
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <div className="grid grid-cols-12 gap-y-3 justify-center items-center px-6 py-10">
        <div className="md:col-span-6 col-span-12 space-y-2 md:order-0 order-1">
          <h1 className="text-4xl text-gray-50 font-qsand font-bold">Welcome,</h1>
          <h2 className="text-3xl text-white">
            I'm <strong className="text-yellow font-medium font-roboto">Nasir Ahmed</strong>
          </h2>
          <div className="text-coral font-bold font-qsand text-2xl">
            <Typewriter
              options={{
                strings: ["WEB DEVELOPER", "WEB DESIGNER", "MERN STACK DEVELOPER", "I LOVE TO DEVELOP"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="text-gray-100 font-qsand">
            I am a passionate web developer and always trying to learn different technologies related to web
            development. Being a friendly person, I love to take on challenges and always try to fulfill my
            responsibilities.
          </p>
          <div className="flex justify-start gap-3 py-5">
            <ScrollLink
              to="contact"
              smooth={true}
              offset={-50}
              duration={400}
              className="cursor-pointer md:px-6 px-4 bg-blue-600 rounded py-2 text-white font-medium">
              Hire Me
            </ScrollLink>
            <a
              href="https://drive.google.com/uc?export=download&id=1RkaYQItWkrkbgLlmHonIe53M1jip6Qjj"
              target="blank"
              className="lg:px-4 px-2 py-2 bg-gray-600 text-white rounded font-medium">
              {" "}
              My Resume
            </a>
          </div>
        </div>
        <div className="md:col-span-6 col-span-12 md:order-1 py-2">
          <img
            src={webDeveloper}
            className="w-4/6 aspect-square object-cover mx-auto rounded-full bg-[rgba(113,113,113,0.5)] border-4  border-coral"
            alt="vector art"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
