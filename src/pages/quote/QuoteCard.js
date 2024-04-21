import React from "react";
import "./style.css";

const QuoteCard = ({ desc, author }) => {
  return (
    <div className="quote-card">
      <h1>{desc}</h1>
      <p>{author}</p>
    </div>
  );
};

export default QuoteCard;
