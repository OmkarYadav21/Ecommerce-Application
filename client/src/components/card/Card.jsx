import React, { useState } from 'react';
import './card.css';
import { Link, useNavigate } from 'react-router-dom';

const Card = ({item,addToCart}) => {
  const{images,id,brand,title,price}=item;
  return (
    <div className='card'>
      <Link to={`/Singleproduct/${id}`} className='link'>
        <img src={images[0]} alt="" className="card-image" />
      </Link>

      <div className="card-content">
        <p className='brand-name'>{brand}</p>
        <h3 className="card-title">{title}</h3>
        <p className="card-description"></p>

        <div className="card-footer">
          <span className="card-price">{price} <i className="fa-solid fa-indian-rupee-sign rc"></i></span>
          <button className="card-button" onClick={()=>addToCart(item)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
