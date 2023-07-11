import React from "react";
import {render} from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";
import ProductContainer from "../components/ProductContainer";

test("renders ProductContainer correctly", () => {
  const props = {
    id: "123",
    image: "image-url",
    title: "Product Title",
    price: 9.99,
    rate: 4.5,
    count: 10,
    handleClick: jest.fn(),
  };
  const {container} = render(
    <Router>
      <ProductContainer {...props} />
    </Router>
  );
  expect(container).toMatchSnapshot();
});
