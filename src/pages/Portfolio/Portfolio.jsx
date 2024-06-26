import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./portfolio.css";
import bikemart from "../../images/project-1.png";
import footprints from "../../images/project-2.png";
import medicare from "../../images/project-3.png";
import tastyFoodHub from "../../images/project-4.png";
import HondaCBR from "../../images/project-5.png";
import TechyTeach from "../../images/project-6.png";
import dailyhut from "../../images/daily-hut.png";
const Portfolio = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(4);
  useEffect(() => {
    fetch("JsonDB/projectsDB.json")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  const projectImgList = {
    dailyhut,
    bikemart,
    footprints,
    medicare,
    tastyFoodHub,
    HondaCBR,
    TechyTeach,
  };

  const showAllprojects = () => {
    setCount(data.length);
    document.getElementById("show-all-btn").classList.toggle("hidden");
  };

  return (
    <div className="md:py-8 pt-7 py-5" id="portfolio">
      <h2 className="text-xl font-medium font-roboto text-center text-green-custom">
        Portfolio
      </h2>
      <h2 className="sm:text-4xl text-3xl font-qsand font-medium text-center text-stromboli pb-5">
        My Latest Works!
      </h2>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 gap-y-6 pt-6 md:px-8 px-3">
        {data.slice(0, count).map((dt) => (
          <div
            key={dt.id}
            className="grid grid-cols-12 border rounded-xl"
            style={{ borderColor: "#313552" }}
          >
            <div className="shadow-xl sm:rounded-tl-xl sm:col-span-11 col-span-12">
              <Link to={`/portfolioDetails/${dt.id}`}>
                <div className="img-cont h-80 overflow-hidden relative">
                  <img
                    src={projectImgList[dt.img]}
                    alt="project snapshot"
                    className="w-full absolute hover:bottom-0 block overflow-hidden sm:rounded-tl-xl sm:rounded-tr-none rounded-t-xl"
                  />
                  <div className="ov">
                    <p>click to see details</p>
                  </div>
                </div>
              </Link>
              <div className="px-2 space-y-2 sm:rounded-bl-xl rounded-bl-none pb-3 bg-[#313552]">
                <h2 className="text-xl text-center pt-4 font-roboto text-white">
                  {dt.title}
                </h2>
                <p
                  className="text-gray-200 text-center"
                  style={{
                    overflow: "hidden",
                    maxHeight: "50px",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {dt.details
                    .split(" ")
                    .toString()
                    .replaceAll("," || ".", " ")}
                </p>
              </div>
            </div>
            <div
              className="flex sm:flex-col justify-center gap-y-5 py-1 sm:col-span-1 col-span-12 sm:rounded-r-xl rounded-r-none sm:rounded-bl-none rounded-b-xl"
              style={{ backgroundColor: "#313552" }}
            >
              <Link
                to={`/portfolioDetails/${dt.id}`}
                className="text-2xl text-red-100 borde border-coral px-2 block text-center"
              >
                <i className="fas fa-info-circle" title="Details"></i>
              </Link>
              <a
                href={dt.liveSite}
                target="blank"
                className="text-2xl block text-center font-roboto borer px-2"
                style={{ color: "#FFC576", borderColor: "#FFC576" }}
              >
                <i className="fab fa-firefox" title="Visit"></i>
              </a>
              <a
                href={dt.clientSideCode}
                target="blank"
                className="text-2xl block text-center text-white border-coral borde px-2"
              >
                <i className="fab fa-github" title="github"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center md:py-5 pt-5 pb-3">
        <button
          id="show-all-btn"
          className="bg-coral text-white hover:bg-indigo-600 outline-none px-10 py-2 font-qsand font-bold rounded"
          onClick={showAllprojects}
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
