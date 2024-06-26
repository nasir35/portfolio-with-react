import { useEffect, useState } from "react";
import { useParams } from "react-router";
import bikemart from "../../images/project-1.png";
import footprints from "../../images/project-2.png";
import medicare from "../../images/project-3.png";
import tastyFoodHub from "../../images/project-4.png";
import HondaCBR from "../../images/project-5.png";
import TechyTeach from "../../images/project-6.png";
import dailyhut from "../../images/daily-hut.png";
import SimpleFooter from "../Shared/Footer/SimpleFooter";
import SimpleNav from "../Shared/Header/SimpleNav";
import "./portfolio.css";
import BorderBtn from "../../component/BorderBtn";
import BtnWithBg from "../../component/BtnWithBg";
import HTML from "../../images/lang-icon/HTML.png";
import CSS from "../../images/lang-icon/CSS.png";
import TailwindCSS from "../../images/lang-icon/Tailwind CSS.png";
import JS from "../../images/lang-icon/JS.png";
import Reactjs from "../../images/lang-icon/React.js.png";
import MongoDB from "../../images/lang-icon/MongoDB.png";
import Firebase from "../../images/lang-icon/Firebase.png";
import Expressjs from "../../images/lang-icon/Express.js.png";
import Nodejs from "../../images/lang-icon/Node.js.png";
import Splidejs from "../../images/lang-icon/Splide.js.png";
import ReactRouter from "../../images/lang-icon/React Router.png";

const SingleProject = () => {
  const imgList = {
    dailyhut,
    bikemart,
    footprints,
    medicare,
    tastyFoodHub,
    HondaCBR,
    TechyTeach,
  };

  const id = useParams();
  let techIcons = {
    HTML,
    CSS,
    JS,
    TailwindCSS,
    Reactjs,
    Nodejs,
    Firebase,
    Expressjs,
    MongoDB,
    Splidejs,
    ReactRouter,
  };
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("/JsonDB/projectsDB.json")
      .then((res) => res.json())
      .then((d) => {
        setdata(d);
      });
  }, []);

  let {
    img = "",
    title = "",
    currentStatus = "",
    details = "",
    TechnologyUsed = "",
    liveSite = "",
    clientSideCode = "",
    serverSideCode = "",
  } = data.length ? data.find((pt) => pt.id == id.id) : {};
  const technologies = TechnologyUsed.split(",");

  let imgSrc = imgList[img];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <SimpleNav></SimpleNav>
      <div className="min-h-full pb-5">
        {
          <div>
            <div className="flex justify-between bg-gray-400 mb-2 text-white py-2 md:px-6 px-2 ">
              <h2 className=" lg:text-2xl md:text-xl text-base font-qsand">
                <a
                  href={liveSite}
                  className="py-0 lg:px-5 md:px-3 px-2 rounded-full font-medium bg-green-100
                    text-green-custom"
                >
                  {title}
                </a>
              </h2>
              <i className=" text-yellow md:text-base sm:text-sm text-xs">
                *Hover on image to see full screenshot!
              </i>
            </div>
            <div className="relative img-container overflow-hidden md:px-6 px-2 ">
              <img
                src={imgSrc}
                alt=""
                className="sImg lg:w-3/5 md:w-4/5 w-full top-0 mx-auto"
              />
            </div>
            <div className="flex justify-center items-center py-3 md:px-6 px-2 ">
              {currentStatus ? (
                <p className="text-green-400 text-xl">
                  Note:{" "}
                  <span className="text-red-400 text-base">
                    {currentStatus}
                  </span>
                </p>
              ) : (
                <p></p>
              )}
            </div>
            <div className="flex lg:gap-5 gap-3 justify-center md:my-5 my-3 md:px-6 px-2 ">
              <BtnWithBg>
                <a href={liveSite}>Visit</a>
              </BtnWithBg>
              <BorderBtn>
                <a href={clientSideCode}>Github (Frontend)</a>
              </BorderBtn>
              {serverSideCode !== "No server side" ? (
                <BorderBtn>
                  <a href={serverSideCode}>Github (Backend)</a>
                </BorderBtn>
              ) : null}
            </div>
            <div className="flex justify-center md:p-4 p-2 flex-col items-center border-t border-b border-gray-200 my-3">
              <h4 className="md:text-2xl text-xl font-bold uppercase text-gray-700 font-qsand underline leading-5 tracking-wider py-3">
                {" "}
                Technologies Used{" "}
              </h4>
              <div className="lg:w-3/4 md:w-4/5 w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-5 gap-3">
                {technologies.map((tech, index) => (
                  <div key={index}>
                    <p className="flex items-center">
                      <img
                        src={
                          techIcons[
                            `${tech.replace(/\./g, "").replace(/\s+/g, "")}`
                          ]
                        }
                        className="md:w-24 w-8 md:h-24 h-8 object-contain overflow-hidden"
                        alt=""
                      />
                      <span className="md:text-2xl text-xl font-medium font-qsand">
                        &nbsp;{tech}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t hover:shadow-xl border-gray-200 bg-gray-700 hover:bg-white hover:text-gray-700 text-white tarsition duration-100 rounded-xl mx-auto md:my-5 my-3 md:w-4/5 w-full">
              <p className="md:p-5 p-3 italic hover:text-gray-800 text-white whitespace-pre-line">
                <b className="md:text-xl text-lg font-qsand">
                  {details.substr(0, 9)}
                </b>
                {details.substr(9)}
              </p>
            </div>
          </div>
        }
      </div>
      <SimpleFooter></SimpleFooter>
    </div>
  );
};

export default SingleProject;
