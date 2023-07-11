import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {createBrowserHistory} from "history";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products, {loader as productsLoader} from "./pages/Products";
import ProductDetail, {loader as productDetailLoader} from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";

const history = createBrowserHistory({
  basename: "https://alan1234111.github.io/fashion-frenzy",
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/fashion-frenzy" element={<Layout />}>
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
  return <RouterProvider router={router} history={history} />;
}

export default App;
