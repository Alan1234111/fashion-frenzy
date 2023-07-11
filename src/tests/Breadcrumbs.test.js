import React from "react";
import {render} from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

test("renders Breadcrumbs correctly", () => {
  const {container} = render(
    <Router>
      <Breadcrumbs />
    </Router>
  );
  expect(container).toMatchSnapshot();
});
