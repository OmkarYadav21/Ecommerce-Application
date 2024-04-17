import React, { useState, useEffect } from 'react';
import './Singleproduct.css';
import axios from 'axios';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import { useParams } from 'react-router-dom';

const Singleproduct = () => {
  const [product, setProduct]=useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Fetch the specific product based on the id parameter
    axios.get(`https://dummyjson.com/products`).then((res) => {
      const productData = res.data.products.find((prod) => prod.id == id);
      setProduct(productData);
      console.log(productData);
    });
  }, [id]);

  return (
    <>
      <Navbar />
      <div className='single-product-main-content'>
        <div className='layout'>
          {product && (
            <div key={product.id} className='single-product-page'>
              <div className='left'>
                <img src={product.images?.[0]} alt='' />
              </div>
              <div className='right'>
                <span className='name'>{product.title}</span>
                <span className='price'>{product.price} RS</span>
                <span className='dec'>{product.description}</span>
                <div className='cart-buttons'>
                  <div className='quantity-buttons'>
                    <span>-</span>
                    <span>4</span>
                    <span>+</span>
                  </div>
                  <button className='add-to-cart'>Add TO CART</button>
                </div>
                <span className='devider' />
                <div className='info-item'>
                  <span className='text-bold'>Category:</span>
                  <span>{product.category}</span>
                  <span className='text-bold'>Share:</span>
                  <span> social media</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Singleproduct;
