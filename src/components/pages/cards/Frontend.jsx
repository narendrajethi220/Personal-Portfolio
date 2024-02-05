import React from "react";
import "./cards.css";
const Frontend = () => {
  return (
    <div className="card-body">
      <h4 className="card-title">Front-End </h4>
      <div className="card-images">
        <img className="card-icon" src="/icons/html-5.png" alt="html" />
        <img className="card-icon" src="/icons/css-3.png" alt="css" />
        <img className="card-icon" src="/icons/js.png" alt="js" />
        <img className="card-icon" src="/icons/bootstrap.png" alt="bootstrap" />
        <img className="card-icon" src="/icons/react.png" alt="react" />
      </div>
    </div>
  );
};

export default Frontend;
