import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products, {loader as ProductsLoader} from "./pages/Products";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<Products />} loader={ProductsLoader} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
