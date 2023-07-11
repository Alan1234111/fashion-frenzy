import React from "react";
import {render} from "@testing-library/react";
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Products, {loader} from "../pages/Products";

test("renders Products correctly", () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <React.Fragment>
        <Route path="/products" element={<Products />} loader={loader} />
      </React.Fragment>
    )
  );
  const {container} = render(
    <RouterProvider router={router}>
      <Products />
    </RouterProvider>
  );
  expect(container).toMatchSnapshot();
});
