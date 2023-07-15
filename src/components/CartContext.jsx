import {createContext, useState} from "react";

export const CartContext = createContext();

export function CartProvider({children}) {
  const [productsInCart, setProductsInCart] = useState(JSON.parse(localStorage.getItem("products")) || []);
  const numberOfItems = productsInCart.map((product) => product.quantity).reduce((total, prev) => total + prev, 0);

  const value = {
    numberOfItems,
    productsInCart,
    setProductsInCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
