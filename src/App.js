import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products, {loader as productsLoader} from "./pages/Products";
import ProductDetail, {loader as productDetailLoader} from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<Products />} loader={productsLoader} errorElement={<Error />} />
      <Route path="products/:id" element={<ProductDetail />} loader={productDetailLoader} errorElement={<Error />} />
      <Route path="cart" element={<Cart />} errorElement={<Error />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
