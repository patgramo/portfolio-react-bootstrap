import React from "react";
import {
  Container,
  Button,
  Badge,
  Card,
  Dropdown,
  Nav,
  Navbar,
  NavDropdown,
  Accordion
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./styles.css";
import Navigation from "./Navigation.js";
import Hero from "./Hero.js";
import About from "./About.js";
import Skills from "./Skills.js";
import Portfolio from "./Portfolio.js";
import Contact from "./Contact.js";
library.add(fab, fas);

export default function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}
