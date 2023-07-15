import Header from "./Header";
import {Outlet} from "react-router-dom";
import {CartProvider} from "./CartContext";

function Layout() {
  return (
    <CartProvider>
      <Header />
      <Outlet />
    </CartProvider>
  );
}

export default Layout;
