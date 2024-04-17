import React from 'react';
import Card from "../card/Card";
import "./Products.css";
import axios from 'axios';
import { useState, useEffect } from 'react';


const Products = ({addToCart,cart}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((res) => {
      setProducts(res.data.products);
      console.log(res.data.products);
    });
  }, []);

  return (
    <div className="container2">
      <div className="featured-section">
        <h1 className="featured-title">Featured Products</h1>
        <h3 className="featured-subtitle">Winter collection new modern design</h3>
      </div>
      <div className="card-container">
        {products.slice(0,8).map((prod) => (
          <Card
          key={prod.id}
          id={prod.id}
          item={prod}
          addToCart={addToCart}
          // handleClick={handleClick}
        />
        ))}
      </div>
    </div>
  );
}

export default Products;
