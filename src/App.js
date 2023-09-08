import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './components/About/About';
import Gallery from './components/gallery/Gallery';
import Qoute1 from './components/quotes/Qoute1';
import Qoute2 from './components/quotes/Qoute2'
import Qoute3 from './components/quotes/Qoute3';
import Qoute4 from './components/quotes/Qoute4';
import Qoute5 from './components/quotes/Qoute5';
import {BrowserRouter,Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
        <>
        <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/qoute1" element={<Qoute1 />} />
          <Route path="/qoute2" element={<Qoute2 />} />
          <Route path="/qoute3" element={<Qoute3 />} />
          <Route path="/qoute4" element={<Qoute4 />} />
          <Route path="/qoute5" element={<Qoute5 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
    </>
  );
}

export default App;
