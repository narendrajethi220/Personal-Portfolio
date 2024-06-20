import React from "react";
import "./Herosection.css";
import "../App.css";
// import { FaInstagram, FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Herosection = () => {
  return (
    <div id="heromain" className="hero-main">
      <div className="hero-intro">
        <div className="hero-intro-div">
          <img src="/namaskara.png" alt="Namaskar" />
        </div>
        <h2 className="hero-title">
          Namaste, I am <span className="hero-name">Narendra Jethi</span>
        </h2>
        <p className="hero-para">
          Enthusiastic B.Tech graduate in Computer Science with a decent
          foundation in programming, web development, and cloud technologies.
        </p>
        <span className="get-resume-space">
          <a
            href="https://drive.google.com/file/d/1tZ0cvlhVBqSZWE67limrBxnD8l_CEZlV/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
          >
            Get Resume
          </a>
        </span>
      </div>

      <div className="hero-img">
        <img src="/hero-main-img.png" alt="Hero-img" />
      </div>
    </div>
  );
};

export default Herosection;
