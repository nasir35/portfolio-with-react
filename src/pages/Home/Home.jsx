import React, { useEffect } from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Service-section/Services";
import Footers from "../Shared/Footer/Footer";
import Navbar from "../Shared/Header/Navbar";
import Banner from "./Banner-section/Banner";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Portfolio></Portfolio>
      <Services></Services>
      <Contact></Contact>
      <Footers></Footers>
    </div>
  );
};

export default Home;
