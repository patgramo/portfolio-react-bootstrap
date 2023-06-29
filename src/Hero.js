import React from "react";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

function Hero() {
  return (
    <section id="hero">
      <div id="hero-left">
        <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
          <h1>
            I'm a{" "}
            <span className="hero-highlight">front-end web developer</span> with
            a strong background in{" "}
            <span className="hero-highlight">teaching and learning</span>
          </h1>
        </ScrollAnimation>
        <div id="hero-buttons">
          <a href="#portfolio" className="hero-button-portfolio">
            <FontAwesomeIcon
              icon="fa-solid fa-laptop-code"
              className="button-icon"
            />
            View My Work
          </a>
          <a href="#contact" className="hero-button-contact">
            <FontAwesomeIcon
              icon="fa-solid fa-envelope"
              className="button-icon"
            />
            Contact
          </a>
        </div>
      </div>
      <div id="hero-right">
        <img
          src={require("./images/hero.jpg")}
          alt="laptop computer with code"
        />
      </div>
    </section>
  );
}

export default Hero;
