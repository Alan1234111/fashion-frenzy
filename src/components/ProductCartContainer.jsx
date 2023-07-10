import Button from "react-bootstrap/esm/Button";

function ProductCartContainer(props) {
  console.log(props.price);
  return (
    <div className="d-flex align-items-center justify-content-between p-4 border-top border-bottom" style={{height: "150px"}}>
      <img style={({height: "100px"}, {width: "10%"})} src={props.img} alt="" />
      <p className="fw-bold m-0 w-25">{props.title}</p>
      <div className="d-flex align-items-center justify-content-center">
        <Button className="text-secondary bg-white border-0 fs-4">-</Button>
        <input type="text" className="item-quantity-input text-center" value={props.quantity} />
        <Button className="text-secondary bg-white border-0">+</Button>
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
