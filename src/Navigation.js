import React from "react";
import ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container id="navigation">
        <Navbar.Brand href="http://codebypat.com">
          Patrick Morrison
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-links">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav className="nav-socials">
            <Nav.Link
              href="https://github.com/patgramo"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/patrickmorrison33"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </Nav.Link>
            <Nav.Link
              href="https://www.instagram.com/patgramo"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FontAwesomeIcon icon="fa-brands fa-instagram" />
            </Nav.Link>
            <Nav.Link
              href="https://www.facebook.com/patgramo"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FontAwesomeIcon icon="fa-brands fa-facebook" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
