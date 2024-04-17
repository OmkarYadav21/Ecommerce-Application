import React from 'react'
import './Features.css'
import d1 from './free-shipping.jpg'
import d2 from './online-shopping.jpg'
import d3 from './cashback.jpg'
import d4 from "./sale.jpg";
import d5 from './support.jpg'
const Features = () => {
  return (
    <div className='container1'>
      <div className='d1'><img src={d1} alt="" /></div>
      <div className='d2'><img src={d2} alt="" /></div>
      <div className='d3'><img src={d3} alt="" /></div>
      <div className='d4'><img src={d4} alt="" /></div>
      <div className='d5'><img src={d5} alt="" /></div>
    </div>
  )
}

export default Features
