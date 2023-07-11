import Button from "react-bootstrap/esm/Button";
import {Link} from "react-router-dom";

function ProductCartContainer(props) {
  return (
    <div className="d-flex align-items-center justify-content-between p-4 border-top border-bottom" style={{height: "150px"}}>
      <Link to={`/products/${props.id}`} style={{width: "10%"}}>
        <img style={({height: "100px"}, {width: "100%"})} src={props.img} alt="" />
      </Link>
      <p className="fw-bold m-0 w-25">{props.title}</p>
      <div className="d-flex align-items-center justify-content-center">
        <Button className="text-secondary bg-white border-0 fs-4" onClick={() => props.decrement(props.id)}>
          -
        </Button>
        <input type="number" className="item-quantity-input text-center" value={props.quantity} />
        <Button className="text-secondary bg-white border-0" onClick={() => props.increment(props.id)}>
          +
        </Button>
      </div>
      <p className="fw-bold m-0" style={{width: "70px"}}>
        $ {props.price.toFixed(2)}
      </p>
      <Button onClick={() => props.handleDelete(props.id)} className="text-secondary bg-white border-0">
        &#10005;
      </Button>
    </div>
  );
}

export default ProductCartContainer;
