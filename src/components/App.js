import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../scss/App.scss';
import Navbar from './Navbar';
import Home from './Home';
import Categories from './Categories';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
