import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import Form from "react-bootstrap/Form";
import {useState} from "react";
import ProductCartContainer from "../components/ProductCartContainer";

function Cart() {
  const [productsInCart, setProductsInCart] = useState(JSON.parse(localStorage.getItem("products")) || []);
  const [delivery, setDelivery] = useState(10.95);

  const numberOfItems = productsInCart.map((product) => product.quantity).reduce((total, prev) => total + prev, 0);

  const costOfProducts = productsInCart.reduce((total, product) => total + product.price * product.quantity, 0);
  const totalCost = parseFloat(costOfProducts + parseFloat(delivery)).toFixed(2);

  function handleDelete(id) {
    setProductsInCart((prevProducts) => {
      const updateProducts = prevProducts.filter((product) => product.id !== id);

      localStorage.setItem("products", JSON.stringify(updateProducts));
      return updateProducts;
    });
  }

  function increment(id) {
    setProductsInCart((prevProducts) => {
      const updatedQuantityProducts = prevProducts.map((product) => {
        if (product.id === id) {
          return {...product, quantity: product.quantity + 1};
        }
        return product;
      });

      localStorage.setItem("products", JSON.stringify(updatedQuantityProducts));
      localStorage.setItem("quantity", JSON.stringify(numberOfItems + 1));
      return updatedQuantityProducts;
    });
  }

  function decrement(id) {
    setProductsInCart((prevProducts) => {
      const updatedQuantityProducts = prevProducts.map((product) => {
        if (product.id === id && product.quantity > 1) {
          return {...product, quantity: product.quantity - 1};
        }
        return product;
      });

      localStorage.setItem("products", JSON.stringify(updatedQuantityProducts));
      localStorage.setItem("quantity", JSON.stringify(numberOfItems - 1));
      return updatedQuantityProducts;
    });
  }

  const displayProducts = productsInCart.map((product) => {
    return <ProductCartContainer key={product.id} id={product.id} img={product.image} title={product.title} price={product.price} handleDelete={handleDelete} quantity={product.quantity} increment={increment} decrement={decrement} />;
  });

  return (
    <div data-testid="cart" id="cart-page-container" className="d-flex justify-content-center align-items-center">
      <Container id="cart-description-container" className="h-100">
        <Row className="mt-5 shadow-lg">
          <Col md={8} className="bg-white rounded">
            <div className="d-flex p-3 align-items-center">
              <h2 className="me-auto">Shopping Cart</h2>
              <p className="m-0">{numberOfItems} items</p>
            </div>

            {displayProducts}

            <Button className="text-secondary bg-white border-0 mt-5 py-2" as={Link} to="/products">
              &larr; Back to Shop
            </Button>
          </Col>
          <Col md={4} className="bg-dark text-white rounded h-100">
            <h2 className="p-3">Summary</h2>
            <div className="border-top border-bottom">
              <div className="d-flex p-3">
                <p className="me-auto">Itmes {numberOfItems}</p>
                <p>$ {totalCost}</p>
              </div>

              <form className="py-2 mb-5">
                <Form.Label htmlFor="shipping">SHIPPING:</Form.Label>
                <Form.Select onChange={(e) => setDelivery(e.target.value)} className="p-2" id="shipping" aria-label="Default select example">
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
                <p>$ {totalCost}</p>
              </div>
              <Button variant="danger" className="w-100 mt-2 mb-4" as={Link} to={"/"}>
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
