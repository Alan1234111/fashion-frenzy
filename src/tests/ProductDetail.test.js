import React from "react";
import {render} from "@testing-library/react";
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import ProductDetail, {loader as productDetailLoader} from "../pages//ProductDetail";

test("renders ProductDetail correctly", () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <React.Fragment>
        <Route path="/products/:id" element={<ProductDetail />} loader={productDetailLoader} />
      </React.Fragment>
    )
  );
  const {container} = render(
    <RouterProvider router={router}>
      <ProductDetail />
    </RouterProvider>
  );
  expect(container).toMatchSnapshot();
});
