import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import {Link, useSearchParams} from "react-router-dom";

function Breadcrumbs() {
  const [searchParams, setSearchParams] = useSearchParams();

  function filterCategory(e) {
    setSearchParams((prevParams) => {
      if (e.target.value === "all") {
        prevParams.delete("category");
      } else {
        prevParams.set("category", e.target.value);
      }
      return prevParams;
    });
  }

  return (
    <Nav className="ms-5">
      <ul className="d-flex justify-content-around align-items-center p-0">
        <li>
          <Nav.Link as={Link} to="/" className="pe-1 ps-0 text-dark">
            Home
          </Nav.Link>
        </li>
        <li className="pe-1">&gt;</li>
        <li className="pe-1">Products</li>
        <li className="pe-1">&gt;</li>
        <li className="pe-1">
          <Form.Select onChange={(e) => filterCategory(e)} className="shadow-none pe-5 fw-bold" aria-label="Default select example">
            <option value="all">All</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </Form.Select>
        </li>
      </ul>
    </Nav>
  );
}

export default Breadcrumbs;
