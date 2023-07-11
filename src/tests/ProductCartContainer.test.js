import React from "react";
import {render} from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";
import ProductCartContainer from "../components/ProductCartContainer";

test("renders ProductCartContainer correctly", () => {
  const props = {
    id: "123",
    img: "image-url",
    title: "Product Title",
    quantity: 2,
    price: 9.99,
    decrement: jest.fn(),
    increment: jest.fn(),
    handleDelete: jest.fn(),
  };
  const {container} = render(
    <Router>
      <ProductCartContainer {...props} />
    </Router>
  );
  expect(container).toMatchSnapshot();
});
