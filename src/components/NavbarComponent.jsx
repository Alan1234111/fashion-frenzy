import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar id="navbar" collapseOnSelect expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand className="text-white fs-3" as={Link} to="/">
          FashionFrenzy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-white" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
          <Nav.Link className="ms-3" id="cart" as={Link} to="/cart"></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
