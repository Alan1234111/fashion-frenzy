import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import Home from "../pages/Home";

describe("Home", () => {
  it("matches the snapshot", () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={["/"]} initialIndex={0}>
          <Home />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
