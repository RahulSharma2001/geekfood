import React from "react";
import "./style.css";
const Card = ({ info }) => {
  return (
    <div className="card">
      <p>{info}</p>
      <div className="profile-info">
        <img
          src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
          alt="profile"
          width="42px"
          height="42px"
        />
        <div>
          <span className="name">
            <strong>Gladis Lennon</strong>
          </span>
          <br />
          <span>Head of SEO</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
