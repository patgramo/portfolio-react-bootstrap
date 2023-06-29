import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

function Contact() {
  return (
    <section id="contact">
      <div className="section-title">
        <h1>Contact</h1>
      </div>
      <div id="form">
        <form
          action="https://getform.io/f/40bd3a35-2095-4d48-a820-d56f4b9641b7"
          method="POST"
        >
          <input name="name" type="text" placeholder="Name" />
          <input name="email" type="email" placeholder="Email" />
          <input name="subject" type="text" placeholder="Subject" />
          <textarea
            rows="5"
            id="comment"
            name="message"
            placeholder="Project Details"
          ></textarea>
          <button
            type="submit"
            value="Submit"
            className="contact-button"
            id="contact-submit"
          >
            Send Message
          </button>
        </form>
      </div>
      <footer id="footer">
        <a
          href="https://github.com/patgramo"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FontAwesomeIcon icon="fa-brands fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/patrickmorrison33"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        </a>
        <a
          href="https://www.instagram.com/patgramo"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FontAwesomeIcon icon="fa-brands fa-instagram" />
        </a>
        <a
          href="https://www.facebook.com/patgramo"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FontAwesomeIcon icon="fa-brands fa-facebook" />
        </a>
      </footer>
    </section>
  );
}

export default Contact;
