import React from "react";
import "./style.css";

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
          <div className="item">Home</div>
          <div className="item">Quote</div>
          <div className="item">Resturants</div>
          <div className="item">Food</div>
          <div className="item">Contact</div>
        </div>

        <button className="getStartedBtn">Get started</button>
      </div>
    </div>
  );
};

export default Navbar;
