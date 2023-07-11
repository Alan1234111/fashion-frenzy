import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import {Link} from "react-router-dom";

function ProductCartContainer(props) {
  return (
    <Container className="d-flex align-items-center justify-content-between p-4 border-top border-bottom flex-column flex-md-row">
      <Col md={2} className="p-4 p-md-0">
        <Link to={`/products/${props.id}`}>
          <img style={{height: "100px"}} src={props.img} alt="" />
        </Link>
      </Col>
      <Col md={3}>
        <p className="fw-bold m-0">{props.title}</p>
      </Col>
      <Col md={4} className="d-flex align-items-center justify-content-center">
        <Button className="text-secondary bg-white border-0 fs-4" onClick={() => props.decrement(props.id)}>
          -
        </Button>
        <input type="number" className="item-quantity-input text-center" value={props.quantity} />
        <Button className="text-secondary bg-white border-0" onClick={() => props.increment(props.id)}>
          +
        </Button>
      </Col>
      <Col md={2}>
        <p className="fw-bold m-md-0 mt-2" style={{width: "70px"}}>
          $ {props.price.toFixed(2)}
        </p>
      </Col>
      <Col md={2}>
        <Button onClick={() => props.handleDelete(props.id)} className="text-secondary bg-white border-0">
          &#10005;
        </Button>
      </Col>
    </Container>
  );
}

export default ProductCartContainer;
