import './App.css';
// import Navbar from './components/Navbar';
import { Routes, Route,} from 'react-router-dom';
import LandingPage from './pages/landing-page/LandingPage';
import About from './pages/About';
import Shop from './pages/Shopping-page/Shop';
import Blog from './pages/Blog';
import Cart from './pages/cart/Cart';
import Contact from './pages/Contact';
import Shop2 from './pages/Shopping-page/Shop2';
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <ShopContextProvider>
    
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop2" element={<Shop2 />} />
      <Route path="blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    
    </ShopContextProvider>
  );
}

export default App;
