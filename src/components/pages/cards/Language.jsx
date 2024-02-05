import React from "react";
import "./cards.css";

const Language = () => {
  return (
    <div className="card-body">
      <h4 className="card-title">Languages</h4>
      <div className="card-images">
        <img className="card-icon" src="/icons/C.png" alt="C" />
        <img className="card-icon" src="/icons/C++.png" alt="C++" />
        <img className="card-icon" src="/icons/java.png" alt="java" />
        <img className="card-icon" src="/icons/oops.png" alt="oops" />
        <img className="card-icon" src="/icons/dsa.png" alt="dsa" />
      </div>
    </div>
  );
};

export default Language;
