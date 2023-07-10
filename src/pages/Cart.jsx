import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import {Link} from "react-router-dom";
import Form from "react-bootstrap/Form";
import {useState} from "react";
import ProductCartContainer from "../components/ProductCartContainer";

function Cart() {
  const [productsInCart, setProductsInCart] = useState(JSON.parse(localStorage.getItem("products")) || []);

  return (
    <div id="cart-page-container" className="d-flex justify-content-center align-items-center">
      <Container id="cart-description-container" className="h-100">
        <Row className="mt-5 shadow-lg">
          <Col md={8} className="bg-white rounded">
            <div className="d-flex p-3 align-items-center">
              <h2 className="me-auto">Shopping Cart</h2>
              <p className="m-0">3 items</p>
            </div>

            {productsInCart.map((product) => {
              return <ProductCartContainer img={product.image} title={product.title} price={product.price} />;
            })}

            {/* <div className="d-flex align-items-center justify-content-between p-4 border-top border-bottom">
              <img style={{height: "100px"}} src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
              <p className="fw-bold m-0 w-25">Cotton t-shirt</p>
              <div className="d-flex align-items-center justify-content-center">
                <Button className="text-secondary bg-white border-0 fs-4">-</Button>
                <input type="text" className="item-quantity-input text-center" value={1} />
                <Button className="text-secondary bg-white border-0">+</Button>
              </div>
              <p className="fw-bold m-0">$ 44.00</p>
              <Button className="text-secondary bg-white border-0">&#10005;</Button>
            </div> */}
            {/* 
            <div className="d-flex align-items-center justify-content-between p-4 border-top border-bottom">
              <img style={{height: "100px"}} src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
              <p className="fw-bold m-0 w-25">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
              <div className="d-flex align-items-center justify-content-center">
                <Button className="text-secondary bg-white border-0 fs-4">-</Button>
                <input type="text" className="item-quantity-input text-center" value={1} />
                <Button className="text-secondary bg-white border-0">+</Button>
              </div>
              <p className="fw-bold m-0">$ 44.00</p>
              <Button className="text-secondary bg-white border-0">&#10005;</Button>
            </div>

            <div className="d-flex align-items-center justify-content-between p-4 border-top border-bottom">
              <img style={{height: "100px"}} src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
              <p className="fw-bold m-0 w-25">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
              <div className="d-flex align-items-center justify-content-center">
                <Button className="text-secondary bg-white border-0 fs-4">-</Button>
                <input type="text" className="item-quantity-input text-center" value={1} />
                <Button className="text-secondary bg-white border-0">+</Button>
              </div>
              <p className="fw-bold m-0">$ 44.00</p>
              <Button className="text-secondary bg-white border-0">&#10005;</Button>
            </div>

            <div className="d-flex align-items-center justify-content-between p-4 border-top border-bottom">
              <img style={{height: "100px"}} src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
              <p className="fw-bold m-0 w-25">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
              <div className="d-flex align-items-center justify-content-center">
                <Button className="text-secondary bg-white border-0 fs-4">-</Button>
                <input type="text" className="item-quantity-input text-center" value={1} />
                <Button className="text-secondary bg-white border-0">+</Button>
              </div>
              <p className="fw-bold m-0">$ 44.00</p>
              <Button className="text-secondary bg-white border-0">&#10005;</Button>
            </div> */}

            <Button className="text-secondary bg-white border-0 mt-5 py-2" as={Link} to="/products">
              &larr; Back to Shop
            </Button>
          </Col>
          <Col md={4} className="bg-dark text-white rounded h-100">
            <h2 className="p-3">Summary</h2>
            <div className="border-top border-bottom">
              <div className="d-flex p-3">
                <p className="me-auto">Itmes 3</p>
                <p>$ 132.00</p>
              </div>

              <form className="py-2 mb-5">
                <Form.Label htmlFor="shipping">SHIPPING:</Form.Label>
                <Form.Select className="p-2" id="shipping" aria-label="Default select example">
                  <option value="10.95">Strandard Delivery-$10.95</option>
                  <option value="14.99">Fast Delivery-$14.99</option>
                </Form.Select>

                <Form.Label htmlFor="discount-code">GIVE CODE:</Form.Label>
                <Form.Control className="p-2" type="text" id="discount-code" aria-describedby="discountCode" />
              </form>
            </div>

            <div>
              <div className="d-flex p-3">
                <p className="me-auto">TOTAL PRICE</p>
                <p>$ 137.00</p>
              </div>
              <Button variant="danger" className="w-100 mt-2 mb-4">
                Checkout
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cart;
