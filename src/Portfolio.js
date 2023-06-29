import React, { useState } from "react";
import ReactDOM from "react-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="section-title">
        <h1>Portfolio</h1>
      </div>
      <Card>
        <Card.Img
          variant="top"
          src={require("./images/sticky-notes-app.jpg")}
        />
        <Card.Body>
          <Card.Title>Sticky Notes App</Card.Title>
          <Card.Text>
            An app that allows the user to add/edit/save sticky notes.
          </Card.Text>
          <Card.Title>Skills Used</Card.Title>
          <Card.Text className="card-icons">
            <FontAwesomeIcon icon="fa-brands fa-react" className="card-icon" />
            <FontAwesomeIcon icon="fa-brands fa-html5" className="card-icon" />
            <FontAwesomeIcon
              icon="fa-brands fa-css3-alt"
              className="card-icon"
            />
            <FontAwesomeIcon icon="fa-brands fa-github" className="card-icon" />
          </Card.Text>
          <a
            href="https://csb-qbchok.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" className="card-button">
              Check It Out
            </Button>
          </a>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={require("./images/guessTheWord.jpg")} />
        <Card.Body>
          <Card.Title>Guess The Word Game</Card.Title>
          <Card.Text>
            A game that gives users 8 tries to input letters to guess a word.
          </Card.Text>
          <Card.Title>Skills Used</Card.Title>
          <Card.Text className="card-icons">
            <FontAwesomeIcon
              icon="fa-brands fa-square-js"
              className="card-icon"
            />
            <FontAwesomeIcon icon="fa-brands fa-html5" className="card-icon" />
            <FontAwesomeIcon
              icon="fa-brands fa-css3-alt"
              className="card-icon"
            />
            <FontAwesomeIcon icon="fa-brands fa-github" className="card-icon" />
          </Card.Text>
          <a
            href="https://patgramo.github.io/guess-the-word/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" className="card-button">
              Check It Out
            </Button>
          </a>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src={require("./images/deconstruct-health.png")}
        />
        <Card.Body>
          <Card.Title>Deconstruct Health</Card.Title>
          <Card.Text>
            A WordPress site that was designed for a Physical Therapist's
            private practice.
          </Card.Text>
          <Card.Title>Skills Used</Card.Title>
          <Card.Text className="card-icons">
            <FontAwesomeIcon
              icon="fa-brands fa-wordpress"
              className="card-icon"
            />
            <FontAwesomeIcon icon="fa-brands fa-html5" className="card-icon" />
            <FontAwesomeIcon
              icon="fa-brands fa-css3-alt"
              className="card-icon"
            />
          </Card.Text>
          <a
            href="https://www.deconstructhealth.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" className="card-button">
              Check It Out
            </Button>
          </a>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={require("./images/drum-kit.jpg")} />
        <Card.Body>
          <Card.Title>JS Keyboard Drum</Card.Title>
          <Card.Text>
            A drum kit that reacts when you press different keyboard keys.
          </Card.Text>
          <Card.Title>Skills Used</Card.Title>
          <Card.Text className="card-icons">
            <FontAwesomeIcon
              icon="fa-brands fa-square-js"
              className="card-icon"
            />
            <FontAwesomeIcon icon="fa-brands fa-html5" className="card-icon" />
            <FontAwesomeIcon
              icon="fa-brands fa-css3-alt"
              className="card-icon"
            />
            <FontAwesomeIcon icon="fa-brands fa-github" className="card-icon" />
          </Card.Text>
          <a
            href="https://patgramo.github.io/javascript-drum-kit/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" className="card-button">
              Check It Out
            </Button>
          </a>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={require("./images/MindBodyHealth.png")} />
        <Card.Body>
          <Card.Title>Pain Recovery Program</Card.Title>
          <Card.Text>
            A WordPress site for a chronic pain recovery program
          </Card.Text>
          <Card.Title>Skills Used</Card.Title>
          <Card.Text className="card-icons">
            <FontAwesomeIcon
              icon="fa-brands fa-wordpress"
              className="card-icon"
            />
            <FontAwesomeIcon icon="fa-brands fa-html5" className="card-icon" />
            <FontAwesomeIcon
              icon="fa-brands fa-css3-alt"
              className="card-icon"
            />
          </Card.Text>
          <a
            href="https://www.mindbodypainrecovery.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" className="card-button">
              Check It Out
            </Button>
          </a>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src={require("./images/nametag-generator.jpg")}
        />
        <Card.Body>
          <Card.Title>Name Tag Generator</Card.Title>
          <Card.Text>
            An app that allows users to input names and populate nametags.
          </Card.Text>
          <Card.Title>Skills Used</Card.Title>
          <Card.Text className="card-icons">
            <FontAwesomeIcon icon="fa-brands fa-react" className="card-icon" />
            <FontAwesomeIcon icon="fa-brands fa-html5" className="card-icon" />
            <FontAwesomeIcon
              icon="fa-brands fa-css3-alt"
              className="card-icon"
            />
            <FontAwesomeIcon icon="fa-brands fa-github" className="card-icon" />
          </Card.Text>
          <a
            href="https://csb-t4r2z8.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" className="card-button">
              Check It Out
            </Button>
          </a>
        </Card.Body>
      </Card>
    </section>
  );
}

export default Portfolio;
