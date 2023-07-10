import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products, {loader as ProductsLoader} from "./pages/Products";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<Products />} loader={ProductsLoader} />
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
