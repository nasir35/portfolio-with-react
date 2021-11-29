import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Home></Home>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
