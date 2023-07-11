import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import Cart from "../pages/Cart";

describe("Cart", () => {
  it("matches the snapshot", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
