import React from "react";
import {render, screen} from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "../App";

describe("App", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
