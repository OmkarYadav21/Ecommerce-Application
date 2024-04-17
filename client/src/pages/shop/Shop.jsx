// Shop.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";

const Shop = ({addToCart,cart}) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setItem(res.data.products);
    });
  }, []);

  
  
  return (
    <>
      <Navbar size={cart.length} />
      <div className="card-container">
        {item.slice(18, 35).map((prod) => (
          <Card key={prod.id} id={prod.id} item={prod} addToCart={addToCart} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Shop;
