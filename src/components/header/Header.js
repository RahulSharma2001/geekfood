import React from "react";
import Navbar from "../navbar/Navbar";
import "./style.css";

const Header = () => {
  return (
    <div>
      <Navbar />
      <div className="header-main">
        <div className="header-text-container">
          <div className="header-text">
            <h1>
              Let us find your<br></br>
              <span>Forever Food.</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>
            <div className="btns">
              <button className="btn search-btn">Search Now</button>
              <button className="btn know-btn">Know More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
