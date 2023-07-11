import React from "react";
import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import About from "../pages/About";

describe("About", () => {
  it("matches the snapshot", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    expect(screen.getByTestId("about")).toMatchSnapshot();
  });
});
