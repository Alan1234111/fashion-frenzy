import {Suspense} from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import {getClothes} from "../api";
import {useLoaderData, defer, Await, useSearchParams} from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductContainer from "../components/ProuductContainer";
import Loading from "../components/Loading";

export function loader() {
  return defer({clothes: getClothes()});
}

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dataProductsPromise = useLoaderData();
  const categoryFilter = searchParams.get("category");

  function addToCart(product) {
    const existingData = localStorage.getItem("products");
    const existingItems = JSON.parse(existingData) || [];
    existingItems.push(product);
    localStorage.setItem("products", JSON.stringify(existingItems));
  }

  return (
    <Container fluid className="p-5">
      <h2 className="ms-5">Shop</h2>
      <Breadcrumbs />

      <Container fluid>
        <Row className="gap-5 justify-content-center">
          <Suspense fallback={<Loading />}>
            <Await resolve={dataProductsPromise.clothes}>
              {(productItems) => {
                const filterClothes = productItems.filter((item) => (categoryFilter ? item.category === categoryFilter : productItems));

                return filterClothes.map((product) => {
                  if (product.category !== "electronics") {
                    return <ProductContainer product={product} key={product.id} image={product.image} title={product.title} price={product.price} count={product.rating.count} rate={product.rating.rate} handleClick={addToCart} />;
                  }
                  return;
                });
              }}
            </Await>
          </Suspense>
        </Row>
      </Container>
    </Container>
  );
}

export default Products;
