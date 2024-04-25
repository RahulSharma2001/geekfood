import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav">
        <div>
          <a href="/" className="brand">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              alt="brand-logo"
            />
            <span className="brand-name">GeekFoods</span>
          </a>
        </div>
        <div className="nav-links">
          <div className="item">
            <NavLink to="/">Home</NavLink>
          </div>
          <div className="item">
            <NavLink to="/quotes">Quote</NavLink>
          </div>
          <div className="item">
            <NavLink to="/restaurant">Resturants</NavLink>
          </div>
          <div className="item">
            <NavLink to="/food">Food</NavLink>
          </div>
          <div className="item">
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>

        <button className="getStartedBtn">Get started</button>
      </div>
    </div>
  );
};

export default Navbar;
