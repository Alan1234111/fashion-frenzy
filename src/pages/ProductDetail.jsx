import {Suspense} from "react";
import {useLoaderData, defer, Await, Link} from "react-router-dom";
import {getProduct} from "../api";
import Loading from "../components/Loading";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";

export function loader({params}) {
  return defer({product: getProduct(params.id)});
}

function ProductDetail() {
  const dataProductPromise = useLoaderData();

  function addToCart(product) {
    const existingData = localStorage.getItem("products");
    const existingItems = JSON.parse(existingData) || [];
    const isAlredyExist = existingItems.some((item) => item.id === product.id);
    if (isAlredyExist) return;
    product.quantity = 1;

    existingItems.push(product);
    localStorage.setItem("products", JSON.stringify(existingItems));
  }

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center mt-5">
      <h2 className="fw-bold mb-5">Product Info</h2>
      <Suspense fallback={<Loading />}>
        <Await resolve={dataProductPromise.product}>
          {(product) => {
            return (
              <>
                <div className="d-flex bg-white w-50 justify-content-space-around p-5 shadow">
                  <img className="me-5 w-50" src={product.image} alt="" style={{height: "250px"}} />
                  <div className="">
                    <h3 className="fs-4 fw-bold">${product.price.toFixed(2)}</h3>
                    <h4 className="mt-4">{product.title}</h4>
                    <h5 className="fs-6 fw-light mt-4">{product.description}</h5>
                    <Button variant="danger" className="mt-4" onClick={() => addToCart(product)}>
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </>
            );
          }}
        </Await>
      </Suspense>
    </Container>
  );
}

export default ProductDetail;
