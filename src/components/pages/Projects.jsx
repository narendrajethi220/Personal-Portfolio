import React from "react";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import "./Projects.css";
import Projectcard from "./Projectcard";

const Projects = () => {
  const projectData = [
    {
      title: "Coding Hour",
      para: "The E-Learning Distributed Management System, CodingHour, is a comprehensive online platform.Built using HTML, CSS, JS, AJAX, jQuery, PHP, and MySQL, this system offers a wide range of features to enhance the learning experience.Designed to facilitate the learning and practice of coding skills.",
      link: "https://github.com/narendrajethi220/E-Learning-Distributed-Management-System-CodingHour-",
      source: "/project_images/project_1.png",
      bg: "#e0f2fe",
    },
    {
      title: "Books Management System",
      para: "This web-based system, built with React for smooth UI and Express , lets you manage your book collection effortlessly. Add, update, and delete books with ease. MySQL provides data storage, MySQL Workbench streamlines database management. Get started and enjoy.",
      link: "https://github.com/narendrajethi220/Books-Management-System",
      source: "/project_images/project_2.png",
      bg: "#fee2e2",
    },
    {
      title: "Explorely",
      para: "Welcome to Explorely Landing Page made with React.Js. Your gateway to unforgettable adventures and seamless travel experiences! At Explorely, we believe in making every journey memorable, whether you're a seasoned explorer or a first-time traveler.",
      link: "https://jethiexplorely.netlify.app/",
      source: "/project_images/project_3.png",
      bg: "#ffedd5",
    },
    {
      title: "E-Shopping Cart",
      para: "I welcome you to my E-Shopping Cart Application a React.js project allowing users to effortlessly add items, view total price, and monitor quantities, clear Carts, increase or decreasing item quantity in their shopping cart.",
      link: "https://jethieshoppingcart.netlify.app/",
      source: "/project_images/project_4.png",
      bg: "#fae8ff",
    },
    {
      title: "To-Do List",
      para: "This is a minimalist task management web app built with React, Express.js and EJS. Users can seamlessly add and mark tasks as completed, with a soothing design featuring a line-through effect for completed tasks. Simplify your to-do list experience with this elegant and user-friendly application.",
      link: "https://github.com/narendrajethi220/ToDo-List-Project",
      source: "/project_images/project_6.png",
      bg: "#d1fae5",
    },
  ];

  return (
    <div id="projects" className="projects-section">
      <div className="project-header">
        <div className="project-header-icon">
          <img
            className="section-icon"
            src="/work.png"
            alt="Projects Here 👇"
          />
          <span className="icon-title">Projects</span>
        </div>
        <p className="project-link">
          <Link
            className="project-link-github"
            to="https://github.com/narendrajethi220?tab=repositories"
            target="_blank"
          >
            Github
          </Link>
          <BsGithub className="icon" />
        </p>
      </div>
      <div className="project-list">
        {projectData.map((project, index) => (
          <Projectcard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
