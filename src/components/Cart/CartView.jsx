import React from "react";
import { useContext } from "react";
import { cartContext } from "../../store/cartContext";
import "./Cart.css";
function CartView() {
  const { cart, setCart } = useContext(cartContext);
  const { addToCart, removeItem, totalItem } = useContext(cartContext);

  function deleteItem(id) {
    removeItem(id);
    setCart(cart);
  }
  return (
    <div>
      <h1>Productos en carrito</h1>
      {cart.map((elemento) => {
        return (
          <div key={elemento.key}>
            <div className="grid-container">
              <h1>Producto</h1>
              <h1>Cantidad</h1>
              <h1>Precio</h1>
              <h1></h1>
            </div>
            <div className="grid-container">
              <h2>{elemento.tittle}</h2>
              <h2>{elemento.quantity}</h2>
              <h2>{elemento.quantity * elemento.price}</h2>
              <button onClick={() => removeItem(elemento.id)}>Eliminar</button>
            </div>
          </div>
        );
      })}
      <div>
        <h2></h2>
        <h2></h2>
        <h2></h2>
        <h2>Total Items:{totalItem()}</h2>
      </div>
    </div>
  );
}

export default CartView;
