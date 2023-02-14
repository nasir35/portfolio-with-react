import React from "react";
import { useParams } from "react-router";
import bikemart from "../../images/project-1.png";
import footprints from "../../images/project-2.png";
import medicare from "../../images/project-3.png";
import tastyFoodHub from "../../images/project-4.png";
import HondaCBR from "../../images/project-5.png";
import TechyTeach from "../../images/project-6.png";
import Footers from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import './portfolio.css';
import BorderBtn from '../../component/BorderBtn';
import BtnWithBg from '../../component/BtnWithBg';
import HTML from '../../images/lang-icon/HTML.png';
import CSS from '../../images/lang-icon/CSS.png';
import TailwindCSS from '../../images/lang-icon/Tailwind CSS.png';
import JS from '../../images/lang-icon/JS.png';
import Reactjs from '../../images/lang-icon/React.js.png';
import MongoDB from '../../images/lang-icon/MongoDB.png';
import Firebase from '../../images/lang-icon/Firebase.png';
import Expressjs from '../../images/lang-icon/Express.js.png';
import Nodejs from '../../images/lang-icon/Node.js.png';
import Splidejs from '../../images/lang-icon/Splide.js.png'
import ReactRouter from '../../images/lang-icon/React Router.png'

const SingleProject = () => {
  const id = useParams();
  let langs = new Map([
    ['HTML', HTML],
    ['CSS', CSS],
    ['JS', JS],
    ['Tailwind CSS', TailwindCSS],
    ['React.js', Reactjs],
    ['Node.js', Nodejs],
    ['Firebase', Firebase],
    ['Express.js', Expressjs],
    ['MongoDB', MongoDB],
    ['Splide.js', Splidejs],
    ['React-router', ReactRouter],
  ]);
  
  const data = [
    {
        id: 1,
        img : bikemart,
        title: 'Bike Mart',
        details: `Overview:
        Bikemart is a single page web app with a dashboard  where people can buy bikes of different categories. 
        Can see their order list and can manage them. 
        The dashboard is designed with Tailwind CSS and made functional with react-router-dom@5.0. 
        Implemented JWT token to ensure the security of admin access.
        The dashboard is designed differently for user and admin. An admin can manage orders, products. He can add a Product or Blog and can make a user admin too.`,
        TechnologyUsed : 'HTML,CSS,Tailwind CSS,React.js,Firebase,Node.js,Express.js,MongoDB',
        liveSite: 'https://bikemart-by-nasir.web.app/',
        clientSideCode: 'https://github.com/nasir35/Bikemart-client-side',
        serverSideCode: 'https://github.com/nasir35/Bikemart-server-side',
    },
    {
      id: 2,
      img: footprints,
      title: "FootPrints",
      details: `Overview:
            Users can see packages of Footprints and can purchase one. Implemented Splide js and Firebase Authentication and stored data on MongoDB.
            Users can see their order list and can manage them.`,
      TechnologyUsed : 'React.js, Tailwind CSS, Splide.js, Firebase, Node.js, Express.js, MongoDB',
      liveSite: "https://footprints-by-nasir.web.app/",
      clientSideCode: "https://github.com/nasir35/footprints-client-side",
      serverSideCode: "https://github.com/nasir35/footprints-server-side",
    },
    {
      id: 3,
      img: medicare,
      title: "Medicare",
      details: `Overview:
            Medicare Hospital is a single page web app where people are able to select medical services which they want and can book an appointment by filling up a form of information.
            Implemented Email, Google, Github and Facebook Authentication. So that users can simply register or login.
            Implemented React-router and ensured Authwall for private routes.`,
      TechnologyUsed : 'React.js, Tailwind CSS, React-router, Firebase',
      liveSite: "https://medicare-hospital-bd.web.app/",
      clientSideCode: "https://github.com/nasir35/medicare-hospital",
      serverSideCode: "No server side",
    },
    {
      id: 4,
      img: tastyFoodHub,
      title: "Tasty Food Hub",
      details: `Overview:
            Bikemart is a single page web app with a dashboard  where people can buy bikes of different categories. Can see their order list and can manage them. 
            The dashboard is designed with Tailwind CSS and made functional with react-router-dom@5.0. 
            Implemented JWT token to ensure the security of admin access.
            The dashboard is designed differently for user and admin. An admin can manage orders, products. He can add a Product or Blog and can make a user admin too.`,
      TechnologyUsed : 'React.js, Tailwind CSS, Firebase, Node.js, Express.js, MongoDB',
      liveSite: "https://nasir35.github.io/tasty-food-hub/",
      clientSideCode: "https://github.com/nasir35/tasty-food-hub",
      serverSideCode: "No server side",
    },
    {
      id: 5,
      img: HondaCBR,
      title: "Honda",
      details: `Overview:
            Bikemart is a single page web app with a dashboard  where people can buy bikes of different categories. Can see their order list and can manage them. 
            The dashboard is designed with Tailwind CSS and made functional with react-router-dom@5.0. 
            Implemented JWT token to ensure the security of admin access.
            The dashboard is designed differently for user and admin. An admin can manage orders, products. He can add a Product or Blog and can make a user admin too.`,
      TechnologyUsed : 'React.js, Tailwind CSS, Firebase, Node.js, Express.js, MongoDB',
      liveSite: "https://honda-cbr-assignment-by-nasir.netlify.app/",
      clientSideCode: "https://github.com/nasir35/Honda-CBR",
      serverSideCode: "No server side",
    },
    {
      id: 6,
      img: TechyTeach,
      title: "Techy Teach",
      details: `Overview:
            Bikemart is a single page web app with a dashboard  where people can buy bikes of different categories. Can see their order list and can manage them. 
            The dashboard is designed with Tailwind CSS and made functional with react-router-dom@5.0. 
            Implemented JWT token to ensure the security of admin access.
            The dashboard is designed differently for user and admin. An admin can manage orders, products. He can add a Product or Blog and can make a user admin too.`,
      TechnologyUsed : 'React.js, Tailwind CSS, Firebase, Node.js, Express.js, MongoDB',
      liveSite: "https://techy-teach-by-nasir.netlify.app/",
      clientSideCode: "https://github.com/techy-teach",
      serverSideCode: "No server side",
    },
  ];

    const project = data.find(pt => pt.id==id.id);
    const {img, title, details, TechnologyUsed, liveSite, clientSideCode, serverSideCode} = project;
    const technologies = TechnologyUsed.split(',');
  return (
    <div>
      <Header></Header>
      <div className="min-h-full pb-5">
        {
            <div>
                <div className="flex justify-between bg-gray-400 mb-2 text-white py-2">
                    <h2 className=" text-2xl px-8 font-qsand">Project: <a href={liveSite} className="py-0 px-5 rounded-full font-medium bg-green-100
                    text-green-custom">{title}</a></h2>
                    <i className="px-2 text-yellow">*Hover on image to see full screenshot!</i>
                </div>
                <div className="relative img-container overflow-hidden">
                    <img src={img} alt="" className="sImg lg:w-3/5 top-0 mx-auto" />
                </div>
                <div className="flex gap-5 justify-center my-5">
                    <BtnWithBg><a href={liveSite}>Visit</a></BtnWithBg>
                    <BorderBtn><a href={clientSideCode}>Github (Frontend)</a></BorderBtn>
                    {serverSideCode !='No server side' ? <BorderBtn><a href={serverSideCode}>Github (Backend)</a></BorderBtn> : null}
                </div>
                <div className="flex justify-center p-4 flex-col items-center border-t border-b border-gray-200 my-3">
                    <h4 className="text-2xl font-bold uppercase text-gray-700 font-qsand underline leading-5 tracking-wider py-3"> Technologies Used </h4>
                    <div className="w-3/4 grid grid-cols-4 gap-5">
                        {technologies.map(tech => <div>
                        <p className="flex items-center"><img src={langs.get(tech)} className="w-24 h-24 object-contain overflow-hidden" alt="" /><span className="text-2xl font-medium font-qsand">&nbsp;{tech}</span>
                        </p>
                    </div>)}
                    </div>
                </div>
                <div className="pt-2 border-t hover:shadow-xl border-gray-200 bg-gray-700 hover:bg-white hover:text-gray-700 text-white tarsition duration-100 rounded-xl p-4 mx-auto my-5 w-4/5">
                    <p className="italic hover:text-gray-800 text-white whitespace-pre"><b className="text-xl font-qsand">{details.substr(0,9)}</b>{details.substr(9)}</p>
                </div>
            </div>
        }

      </div>
      <Footers></Footers>
    </div>
  );
};

export default SingleProject;
