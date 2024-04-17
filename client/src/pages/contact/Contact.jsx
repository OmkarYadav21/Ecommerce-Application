import React from 'react';
import './Contact.css'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className='contact-bg'>
    <div className='contact-form'>
      <div className='header'>
        <h1>Contact Us</h1>
      </div>
      <div>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" className='form-data' required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" className='form-data' required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" className='form-data' required></textarea>

          <button type="submit" className='form-submit'>Submit</button>
        </form>
      </div>
      </div>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;
