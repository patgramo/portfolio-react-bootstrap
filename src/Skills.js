import { React, useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

function Skills() {
  return (
    <section id="skills">
      <div className="section-title">
        <h1>Skills</h1>
      </div>
      <div className="skill-item">
        <FontAwesomeIcon icon="fa-brands fa-html5" className="skill-icon" />
        <p>HTML5</p>
      </div>
      <div className="skill-item">
        <FontAwesomeIcon icon="fa-brands fa-css3-alt" className="skill-icon" />
        <p>CSS3</p>
      </div>
      <div className="skill-item">
        <FontAwesomeIcon icon="fa-brands fa-square-js" className="skill-icon" />
        <p>JavaScript</p>
      </div>
      <div className="skill-item">
        <FontAwesomeIcon icon="fa-brands fa-react" className="skill-icon" />
        <p>React</p>
      </div>
      <div className="skill-item">
        <FontAwesomeIcon icon="fa-brands fa-github" className="skill-icon" />
        <p>Git & Github</p>
      </div>
      <div className="skill-item">
        <FontAwesomeIcon icon="fa-brands fa-wordpress" className="skill-icon" />
        <p>WordPress</p>
      </div>
      <div className="skill-item">
        <FontAwesomeIcon
          icon="fa-solid fa-mobile-screen-button"
          className="skill-icon"
        />
        <p>Responsive Web Design</p>
      </div>
      <div className="skill-item">
        <FontAwesomeIcon icon="fa-brands fa-chrome" className="skill-icon" />
        <p>Chrome Dev Tools</p>
      </div>
      <div className="skill-item">
        <FontAwesomeIcon icon="fa-solid fa-square" className="skill-icon" />
        <p>Code Sandbox</p>
      </div>
      <div className="skill-item">
        <FontAwesomeIcon icon="fa-solid fa-image" className="skill-icon" />
        <p>Adobe Creative Suite</p>
      </div>
      <div className="skill-item">
        <FontAwesomeIcon icon="fa-solid fa-gear" className="skill-icon" />
        <p>APIs</p>
      </div>
    </section>
  );
}

export default Skills;
