import React from "react";
import "./cards.css";

const Backend = () => {
  return (
    <div className="card-body">
      <h4 className="card-title">Backend-End </h4>
      <div className="card-images">
        <img className="card-icon" src="/icons/php.png" alt="php" />
        <img className="card-icon" src="/icons/nodejs.png" alt="node" />
        <img className="card-icon" src="/icons/sql.png" alt="sql" />
      </div>
    </div>
  );
};

export default Backend;
