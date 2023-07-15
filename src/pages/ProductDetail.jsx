import {Suspense} from "react";
import {useLoaderData, defer, Await} from "react-router-dom";
import {getProduct} from "../api";
import Loading from "../components/Loading";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import {CartContext} from "../components/CartContext";
import {useContext} from "react";

export function loader({params}) {
  return defer({product: getProduct(params.id)});
}

function ProductDetail() {
  const dataProductPromise = useLoaderData();
  const setProductsInCart = useContext(CartContext).setProductsInCart;

  function addToCart(product) {
    const existingData = localStorage.getItem("products");
    const existingItems = JSON.parse(existingData) || [];
    const isAlredyExist = existingItems.some((item) => item.id === product.id);
    if (isAlredyExist) return;
    product.quantity = 1;

    existingItems.push(product);
    localStorage.setItem("products", JSON.stringify(existingItems));
    setProductsInCart(JSON.parse(localStorage.getItem("products")) || []);
  }

  return (
    <Container data-testid="product-detail" className="d-flex flex-column align-items-center justify-content-center mt-5">
      <h2 className="fw-bold mb-5">Product Info</h2>
      <Suspense fallback={<Loading />}>
        <Await resolve={dataProductPromise.product}>
          {(product) => {
            return (
              <>
                <Col md={6} className="d-md-flex bg-white justify-content-space-around p-5 shadow text-center">
                  <img className="me-md-5 w-50" src={product.image} alt="" style={{height: "250px"}} />
                  <di>
                    <h3 className="fs-4 fw-bold mt-3">${product.price.toFixed(2)}</h3>
                    <h4 className="mt-4">{product.title}</h4>
                    <h5 className="fs-6 fw-light mt-4">{product.description}</h5>
                    <Button variant="danger" className="mt-4" onClick={() => addToCart(product)}>
                      Add to Cart
                    </Button>
                  </di>
                </Col>
              </>
            );
          }}
        </Await>
      </Suspense>
    </Container>
  );
}

export default ProductDetail;
