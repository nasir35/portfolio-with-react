import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About/About';
import AboutMe from './pages/About/AboutMe';
import Education from './pages/About/Education';
import Experience from './pages/About/Experience';
import Skills from './pages/About/Skills';
import Blogs from './pages/Blog-Section/Blogs';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import SingleProject from './pages/Portfolio/SingleProject';
import Services from './pages/Service-section/Services';
import NotFound from './pages/Shared/404/NotFound';
function App() {

  const router = createBrowserRouter([
    {path : '/', 
    element : <Home></Home>,
    children: [
      {path : '/', element : <AboutMe></AboutMe>},
      {path : '/home', element : <AboutMe></AboutMe>},
      {path : 'aboutme', element : <AboutMe></AboutMe>},
      {path : 'skills', element : <Skills></Skills>},
      {path : 'experience', element : <Experience></Experience>},
      {path : 'education', element : <Education></Education>},
    ]
    },
    {path : '/home', element : <Home></Home>},
    {path : '/contact', element : <Contact></Contact>},
    {path : '/about', element : <About></About>},
    {path : '/portfolio', element : <Portfolio></Portfolio>},
    {path : '/services', element : <Services></Services>},
    {path : '/blogs', element : <Blogs></Blogs>},
    {path : '/portfolioDetails/:id', element : <SingleProject></SingleProject>},
    {path : '/*', element : <NotFound></NotFound>}
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
