  import { useState } from 'react'
  import Home from './pages/home/Home'
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Blog from './pages/blog/Blog'
  import Contact from './pages/contact/Contact';
  import About from './pages/about/About';
  import './App.css'
  import Shop from './pages/shop/Shop';
import Singleproduct from './pages/singleproduct/Singleproduct';
import Cart from './pages/cart/Cart';
  function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
      console.log(item);
      let isPresent = false;
      cart.forEach((product) => {
        if (item.id === product.id) {
          isPresent = true;
          product.quantity += 1;
        }
      });
      if (isPresent) {
        return;
      }
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    };
    

    
    
    return (
      <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home cart={cart} addToCart={addToCart}/>} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Shop" element={<Shop cart={cart} addToCart={addToCart} />} />
          <Route path="/Singleproduct/:id" element={<Singleproduct cart={cart} addToCart={addToCart}/>} />
          <Route path="/Cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </BrowserRouter>
      </>
    )
  }

  export default App
