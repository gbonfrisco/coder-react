import { useContext } from "react";
import { cartContext } from "../../store/cartContext";
import "./CartView.css";
import CartDetail from "../CartDetail/CartDetail";

function CartView() {

  const { cart} = useContext(cartContext);


  return (
    <CartDetail detail={cart}/>
      );
}

export default CartView;
