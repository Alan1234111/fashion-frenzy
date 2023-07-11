import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link, NavLink} from "react-router-dom";

function NavbarComponent() {
  const activeStyles = {
    borderBottom: "white solid 1px",
  };

  return (
    <Navbar id="navbar" collapseOnSelect expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white fs-3">
          FashionFrenzy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" style={({isActive}) => (isActive ? activeStyles : null)} className="text-white">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/products" style={({isActive}) => (isActive ? activeStyles : null)} className="text-white">
              Products
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" style={({isActive}) => (isActive ? activeStyles : null)} className="text-white">
              About
            </Nav.Link>
          </Nav>
          <Nav.Link as={Link} to="/cart" className="ms-3" id="cart"></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
