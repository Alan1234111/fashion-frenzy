import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Home() {
  return (
    <Container fluid id="home" className="d-flex align-items-center">
      <Row className="d-flex justify-content-center ">
        <Col xs={12} md={6} className="d-flex flex-column align-items-center p-5 ">
          <h1 className="text-center text-white fw-bold">Welcome to FashionFrenzy!</h1>
          <h2 className="text-white fs-6 text-center">Discover FashionFrenzy, where style meets passion. Explore our meticulously curated collection, blending timeless classics with cutting-edge designs. Embrace your unique fashion sense with our diverse range of clothing, accessories, and footwear. Step into a fashion sanctuary and unleash your style like never before.</h2>
          <Button as={Link} to="/products" variant="danger" className="mt-4">
            SHOP NOW
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
