import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Hero from "./Hero";
import Footer from "./Footer";
import Contact from "./Contact";
import ArtPortfolio from "./ArtPortfolio";
import DevPortfolio from "./DevPortfolio";
import { Link } from "react-router-dom";
import "./App.css";

export default function Navigation() {
  return (
    <Navbar expand="lg" bg="light" variant="light" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Yadira</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/">Home</Link>
            <Link to="/art">Portafolio Arte</Link>
            <Link to="/dev">Portafolio Dev</Link>
            <Link to="/contact">Contacto</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

<nav></nav>;
