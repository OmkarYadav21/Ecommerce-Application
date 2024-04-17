import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import "./Navbar.css";

const Navbar = ({ size }) => {
  return (
    <>
      <nav className="nav-container">
      <label htmlFor="" id="bar">
        <i class="fas fa-bars " ></i>

        </label>
        <div>
          <img src={logo} alt="" className="logo"/>
        </div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/Blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
        <div className="cart1">
          <NavLink to="/Cart">
            <span className="icon">
              <i className="fas fa-cart-plus cart-logo"></i>
            </span>
          </NavLink>

          <span className="cnt">{size}</span>
          
        </div>
        
      </nav>
    </>
  );
};

export default Navbar;
