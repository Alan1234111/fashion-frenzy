import "bootstrap/dist/css/bootstrap.min.css";
import {useContext} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link, NavLink} from "react-router-dom";
import {CartContext} from "./CartContext";

function NavbarComponent() {
  const numberOfItems = useContext(CartContext).numberOfItems;

  const activeStyles = {
    borderBottom: "white solid 1px",
  };

  return (
    <Navbar id="navbar" collapseOnSelect expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white fs-3">
          FashionFrenzy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-danger border-0" />
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
          <div id="cart-link-container">
            <Nav.Link as={Link} to="/cart" className="ms-md-3 mt-2 mt-md-0" id="cart"></Nav.Link>
            {numberOfItems !== 0 && <span className="bg-danger d-flex justify-content-center align-items-center">{numberOfItems}</span>}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
