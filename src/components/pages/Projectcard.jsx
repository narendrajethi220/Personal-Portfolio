import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Projectcard.css";

const Projectcard = (props) => {
  const cardBackground = props.bg;
  return (
    <div
      style={{ backgroundColor: cardBackground }}
      className="project-card"
      key={props.title}
    >
      <Link target="_blank" className="project-card-link" to={props.link}>
        <h2 className="project-title">{props.title}</h2>
        <p className="project-para">{props.para}</p>
        <Link target="_blank" className="project-link" to={props.link}>
          View Project <FaArrowRightLong className="icon" />
        </Link>
        <img className="project-image" src={props.source} alt={props.title} />
      </Link>
    </div>
  );
};

export default Projectcard;
