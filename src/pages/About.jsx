import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import githubMark from "../img/github-mark.svg";

function About() {
  return (
    <div data-testid="about" id="about" className="d-flex flex-column justify-content-center align-items-center p-5 fw-bold fs-5 text-center">
      <p>This is a fictional store and none of the products displayed here exist.</p>
      <p>Products' information and images: Fake Store API.</p>
      <Nav.Link as={Link} to="https://github.com/Alan1234111" target="_blank" className="d-flex align-items-center fs-5 fw-normal">
        Alan &#169; <img className="h-25 mx-2" src={githubMark} alt="" />
      </Nav.Link>
    </div>
  );
}

export default About;
