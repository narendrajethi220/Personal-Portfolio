import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="thank-you">
        <img className="thanks-image" src="thank-you.png" alt="thank-you" />
      </div>
      <div className="copyright">
        <p> &copy; Narendra Singh Jethi || All Right Reserved. </p>
      </div>
    </div>
  );
};

export default Footer;
