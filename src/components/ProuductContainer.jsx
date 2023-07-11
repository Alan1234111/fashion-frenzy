import star from "../img/star.svg";
import starFill from "../img/star-fill.svg";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import {Link} from "react-router-dom";

function ProductContainer(props) {
  const rating = Math.round(props.rate);

  function showRating() {
    const ratingStars = [];

    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        ratingStars.push(<img src={starFill} className="star-fill" alt="" />);
      } else {
        ratingStars.push(<img src={star} className="star-fill" alt="" />);
      }
    }

    return ratingStars;
  }

  return (
    <Col as={Link} to={`${props.id}`} md={3} className="text-center p-5 bg-white shadow-sm text-decoration-none text-black">
      <div className="d-flex justify-content-center align-items-center h-50">
        <img className="mb-4" style={{width: "150px"}} src={props.image} alt="" />
      </div>
      <h3 className="fs-6 product-title">{props.title}</h3>
      <h4 className="fs-5 mt-4 fw-bold">${props.price.toFixed(2)}</h4>
      <div className="rating mb-3">
        {showRating()}
        <span className="ms-1">{props.count}</span>
      </div>
      <Button className="mt-3 index-1" variant="danger" onClick={() => props.handleClick(props.product)}>
        See More
      </Button>
    </Col>
  );
}

export default ProductContainer;
