import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
// import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("heromain");

  const handlesetActive = (to) => {
    setActiveSection(to);
  };

  return (
    <header className="navbar-container">
      <Link
        to="heromain"
        smooth={true}
        duration={500}
        style={{ cursor: "pointer" }}
        offset={-150}
        className={`logo-link ${activeSection === "heromain" ? "active" : ""}`}
        spy={true}
        onSetActive={() => handlesetActive("heromain")}
      >
        <img className="hero-logo" src="/logo.png" alt="Narendra Jethi" />
      </Link>
      <ul className="nav-lists">
        {/* <li className="nav-list-items">
          <Link className="nav-link" to="#">
            Home
          </Link>
        </li> */}
        <li
          className={`nav-list-items $(activeSection==="projects"?"active":"")`}
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            style={{ cursor: "pointer" }}
            offset={-100}
            className="nav-link"
            spy={true}
            onSetActive={() => handlesetActive("projects")}
          >
            Projects
          </Link>
        </li>
        <li
          className={`nav-list-items ${
            activeSection === "about" ? "active" : ""
          }`}
        >
          <Link
            to="about"
            style={{ cursor: "pointer" }}
            smooth={true}
            duration={500}
            offset={-100}
            spy={true}
            className="nav-link"
            onSetActive={() => handlesetActive("about")}
          >
            About
          </Link>
        </li>
        <li
          className={`nav-list-items ${
            activeSection === "contact" ? "active" : ""
          }`}
        >
          <Link
            to="contact"
            style={{ cursor: "pointer" }}
            className="nav-link"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            onSetActive={() => handlesetActive("contact")}
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
