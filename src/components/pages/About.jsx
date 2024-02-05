import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import "./About.css";
import Language from "./cards/Language";
import Frontend from "./cards/Frontend";
import Backend from "./cards/Backend";
import Other from "./cards/Other";

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="about-header">
        <div className="about-header-icon">
          <img className="section-icon" src="/about.png" alt="About Me" />
          <span className="icon-title">About</span>
        </div>
        <p className="about-link">
          <Link
            className="about-link-linkedin"
            to="https://www.linkedin.com/in/narendra-singh-jethi-4b701b195/"
            target="_blank"
          >
            linkedin
          </Link>
          <BsLinkedin className="icon" />
        </p>
      </div>
      <div className="about-me-section">
        <div className="intro">
          <h2 className="intro-title">Introduction</h2>
          <p className="description">
            <span className="para">
              Greetings from the world of bits and bytes! I'm Narendra Singh
              Jethi, a tech enthusiast from the serene town of Khatima,
              Uttarakhand, currently making waves in the bustling tech landscape
              of Gurgaon, Haryana. Armed with a B.Tech in Computer Science and
              Engineering from Graphic Era Hill University, I boast a GPA of
              8.5, reflecting my dedication to programming, cloud technologies,
              and web development.
            </span>
            <br />
            <span className="para">
              My projects, like the E-Learning Management System with CodingHour
              and the Books Management System using React.js, showcase my
              commitment to innovation. With a versatile skill set spanning C,
              C++, Java, and cloud technologies, I am not just a coder; I am a
              problem solver thriving in collaborative environments.
            </span>
            <br />
            <span className="para">
              Certified by Internshala, Udemy, Microsoft, and CourseEra, I've
              authored a research paper approved by IJEAST, pushing the
              boundaries of e-learning. Having cracked exams for companies like
              PWC, Accenture, DXC, TCS, Sopra Steria, and IBM, I bring not just
              technical prowess but also a spirit for physical activities – from
              Badminton and Cricket to Dancing and Swimming.
            </span>
            <br />
            <span className="para">
              In the symphony of challenges, I am Narendra Singh Jethi, where
              tech meets tenacity, and innovation is a way of life. Ready for
              the next coding adventure!
            </span>
          </p>
        </div>
        <div className="qualification">
          <div className="qualification-one">
            <h2 className="qualification-header">Academics</h2>
            <p className="year">
              (2019-2023)
              <span className="course">B.Tech</span>
              <span className="branch">Computer Science and Engineering</span>
              <span className="inst-name">
                Graphic Era Hill University, Bhimtal
              </span>
              <span className="marks">8.5 GPA</span>
            </p>
          </div>
          <div className="qualification-two">
            <p className="year">
              (2017-2018)
              <span className="course">Intermediate</span>
              <span className="branch">PCM with Computer Science</span>
              <span className="inst-name">
                Shiksha Bharati Senior Secondary School, Khatima
              </span>
              <span className="marks">77.4%</span>
            </p>
          </div>

          <div className="qualification-three">
            <p className="year">
              (2015-2016)
              <span className="course">High School</span>
              <span className="branch">Science with IT</span>
              <span className="inst-name">
                City Convent Senior Secondary School, Khatima
              </span>
              <span className="marks">10 CGPA</span>
            </p>
          </div>
        </div>
      </div>
      <div className="skill-set">
        <h2 className="skill-set-title">My Skillsets</h2>
        <div className="skill-card">
          <div className="card-one">
            <Language />
          </div>
          <div className="card-two">
            <Frontend />
          </div>
          <div className="card-three">
            <Backend />
          </div>
          <div className="card-four">
            <Other />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
