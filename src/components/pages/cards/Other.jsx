import React from "react";
import "./cards.css";
const Other = () => {
  return (
    <div className="card-body">
      <h4 className="card-title">Other Technologies </h4>
      <div className="card-images">
        <img className="card-icon" src="/icons/git.png" alt="git" />
        <img className="card-icon" src="/icons/github.png" alt="github" />
        <img className="card-icon" src="/icons/azure.png" alt="azure" />
        <img className="card-icon" src="/icons/google.png" alt="google" />
        <img
          className="card-icon"
          src="/icons/visualstudiocodeicon.png"
          alt="vscode"
        />
        <img
          className="card-icon"
          src="/icons/cyber-security.png"
          alt="vscode"
        />
        <img
          className="card-icon"
          src="/icons/networking.png"
          alt="networking"
        />
        <img className="card-icon" src="/icons/xampp.png" alt="xampp" />
      </div>
    </div>
  );
};

export default Other;
