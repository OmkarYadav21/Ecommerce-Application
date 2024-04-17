import React from 'react'
import './Footer.css'
import bg from './signupbg.jpg'
const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='f1'>
          <h2>Signup for Newsletters</h2> 
          <h3>Get email updates about our latest shop and special offer.</h3>
          <div>
            <input type="text" placeholder="Enter your email" />
            <button>Sign up</button>
          </div>
        </div>
      <div className='f2'>
      <div className="container3">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Contact</h4>
            <ul>
              <li>Address: 562 Wellington Road, Street 32, San Francisco</li>
              <li>Phone:(+91) 0123456789</li>
              <li>Hours: 10:00-18:00. Mon-Sat</li>
              <li>Follow us</li>
            </ul>
          </div>
          <div className="footer-column">
          <h4>About</h4>
            <ul>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Delivery Information</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>My Account</h4>
            <ul>
              <li>Sign In</li>
              <li>Track My Order</li>
              <li>My Wishlist</li>
              <li>View Cart</li>
              <li>Help</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Install App</h4>
            <ul>
              <li>Google Play</li>
              <li>Apple store</li>
            </ul>

          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023. Ecommerce website Trendy Culture</p>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};



export default Footer;
