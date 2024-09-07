import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './pages/Products';
import Services from './pages/Services';
import ProductData from './pages/ProductData';
import FloatingButton from './helper-components/FloatingButton';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:productName" element={<ProductData />} />
      </Routes>
      <FloatingButton />
      <Footer />
    </Router>
  );
}

export default App;
