import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import "./Contact.css";
const Contact = () => {
  const emailAddress = "narendrajethi220@gmail.com";
  const handleClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div id="contact" className="contact-section">
      <div className="contact-header">
        <div className="contact-header-icon">
          <img className="section-icon" src="/contact.png" alt="Contact" />
          <span className="icon-title">Get in touch</span>
        </div>
        <p className="contact-link">
          <Link
            className="contact-link-instagram"
            to="https://www.instagram.com/_narendrajethi?igsh=YmE1bmx2YTlnZzZm&utm_source=qr"
            target="_blank"
          >
            Instagram
          </Link>
          <BsInstagram className="icon" />
        </p>
      </div>
      <div className="contact-me">
        <div className="contact-message">
          <p className="message">
            Let's create something extraordinary together! I'm eager to hear
            your ideas, collaborate on exciting projects, or simply connect.
            Feel free to reach out and share your thoughts. Your message
            matters, and I'm here to turn your vision into reality. Let the
            journey begin! ✨🚀
          </p>
          <button onClick={handleClick}>Contact Me</button>
        </div>
        <img
          className="conference-icon"
          src="/conference.png"
          alt="conference"
        />
      </div>
    </div>
  );
};

export default Contact;
