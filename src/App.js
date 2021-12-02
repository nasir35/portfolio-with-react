import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blogs from './pages/Blog-Section/Blogs';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import SingleProject from './pages/Portfolio/SingleProject';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/blogs" element={<Blogs/>}></Route>
          <Route path="/portfolio" element={<Portfolio />}>
            <Route path=":id" element={<SingleProject />} />
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
