import { createContext, useState } from "react";
import itemsData from "../components/Data/Data";

// 1. Inicializamos el Context con React.createContext()
// 2. Creamos un Provider y le damos un "value"
// 3. Definimos los componentes que van a acceder al context (Consumers)
// 4. Damos a los componentes acceso al context con el hook useContext()
// 5. Los componentes consumers podrán acceder y "subscribirse" al "value" del context

export const cartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item, count) {
    if (isInCart(item.id)) {
      let index = searchIndex(item.id);

      let copyCart = [...cart];
      copyCart[index].quantity = copyCart[index].quantity + count;
      setCart(copyCart);
    } else {
      let copyCart = [...cart];
      copyCart.push({ ...item, quantity: count });
      setCart(copyCart);
    }
  }
  function isInCart(id) {
    return cart.some((elemento) => elemento.id === id);
  }
  function searchIndex(idElem) {
    let index = 0;
    while (cart[index].id !== idElem) {
      index++;
    }
    return index;
  }
  function removeItem(id) {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  }
  function clear() {
    setCart([]);
  }
  function totalItem() {
    let total = 0;
    cart.map((elem) => {
      total = total + elem.quantity;
    });
    return total;
  }
  
  function totalPricing() {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
  }

  return (
    <cartContext.Provider
      value={{ cart, setCart, addToCart, removeItem, totalItem }}
    >
      {children}
    </cartContext.Provider>
  );
}
