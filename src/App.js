import { BrowserRouter } from 'react-router-dom';
import Banner from './pages/Home/Banner-section/Banner';
import Footers from './pages/Shared/Footer/Footers';
import Header from './pages/Shared/Header/Header'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Banner/>
      <Footers></Footers>
      </BrowserRouter>
    </div>
  );
}

export default App;
