import { useContext } from "react";
import { cartContext } from "../../store/cartContext";
import CartDetail from "../CartDetail/CartDetail";
import "./CartView.css";

function CartView() {

  const {cart} = useContext(cartContext);


  return (
    <CartDetail detail={cart}/>
      );
}

export default CartView;
