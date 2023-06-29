import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <section id="about">
      <div className="section-title">
        <h1>About Me</h1>
      </div>
      <div id="about-details">
        <div id="about-left">
          <p>
            I was a 6th grade science teacher in NYC for 6 years. Once COVID-19
            hit, I began teaching remotely and I've been working from home ever
            since. Now, my husband and I are traveling around the country as we
            work! At the beginning of our travels, I tutored online while taking
            courses in front-end web development.
          </p>
          <p>
            Now that I have the skills and tools under my belt, I'm working on
            freelance gigs that will lead me to a future career in web
            development. Check out my skills and projects below!
          </p>
        </div>
        <div id="about-right">
          <ScrollAnimation
            animateIn="animate__fadeInRight"
            animateOnce={true}
            offset="200"
          >
            <img
              id="about-right-img"
              src={require("./images/about.png")}
              alt="Patrick Morrison Profile"
            />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

export default About;
