import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { useLocation } from 'react-router-dom';
import './Cart.css';

const Cart = ({cart,setCart}) => {
  const [total, setTotal] = useState(0);

  

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  useEffect(() => {
    let ans=0;
    cart.map((item)=>(ans+=item.price))
    setTotal(ans)
  }, [cart]);
  

  const handleChange = (item, change) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === item.id ) {
        // Update the quantity or price based on the change value
        if (change === '+') {
          cartItem.quantity += 1;
          cartItem.price = cartItem.price * 2;
        // setTotal(cartItem.price*quantity)
        } else if (change === '-' && item.quantity>1) {
          // Ensure quantity doesn't go below 1
          cartItem.quantity = Math.max(1, cartItem.quantity - 1);
          cartItem.price = cartItem.price / 2;
        } 
      }
      return cartItem;
    });
    
    setCart(updatedCart);
  };

  return (
    <>
      <Navbar />
      <article>
        {cart?.map((item) => (
          <div key={item.id} className="cart-box">
            <div className="cart-img">
              <img src={item.images[0]} alt="" />
              <p>{item.title}</p>
            </div>
            <div className="cart-btn">
              <button onClick={()=>handleChange(item,'-')}>-</button>
              <button>{item.quantity}</button>
              <button onClick={()=>handleChange(item,'+')}>+</button>
            </div>
            <div>
              <span>{item.price} <i className="fa-solid fa-indian-rupee-sign rc"></i></span>
              <button className='remove' onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className='total'>
          <span>Total</span>
          <span>{total}  <i className="fa-solid fa-indian-rupee-sign rc"></i></span>
        </div>
      </article>
      <Footer />
    </>
  );
};

export default Cart;
