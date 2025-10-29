import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import { Link } from "react-router-dom";
import "./App.css";

export default function Navigation() {
  return (
    <Navbar
      className="navbar-settings"
      expand="lg"
      bg="light"
      variant="light"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/">Yadira</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbarText">
            <Link to="/">Home</Link>
            <Link to="/about">About me</Link>
            <Link to="/art">Art Portfolio</Link>
            <Link to="/dev">Dev Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
