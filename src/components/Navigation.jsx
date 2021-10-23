import React from "react";
import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <Navbar.Brand href="#home">
        <img src="/images/logo.svg" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#pricing">Resources</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Login</Nav.Link>
          <Nav.Link eventKey={2} href="#memes" className="btn--small">
            Sign Up
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
