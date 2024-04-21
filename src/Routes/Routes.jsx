import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import NotFound from "../pages/Shared/404/NotFound";
import SingleProject from "../pages/Portfolio/SingleProject";
import AboutMe from "../pages/About/AboutMe";
import Skills from "../pages/About/Skills";
import Education from "../pages/About/Education";
import Experience from "../pages/About/Experience/Experience";
import Navbar from "../pages/Shared/Header/Navbar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <AboutMe></AboutMe>,
      },
      {
        path: "/skills",
        element: <Skills></Skills>,
      },
      {
        path: "/education",
        element: <Education></Education>,
      },
      {
        path: "/experience",
        element: <Experience></Experience>,
      },
    ],
  },
  {
    path: "/portfolioDetails/:id",
    element: <SingleProject></SingleProject>,
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
