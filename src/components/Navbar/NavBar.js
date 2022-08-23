import "./NavBar.css";
import cart from "./bx-cart.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../store/cartContext";

export default function NavBar() {

  const {totalItem} = useContext(cartContext);

  return (
    <div>
      <ul className="navbar">
         <Link to="/">Home</Link>
         <Link to="/category/Stark">Stark</Link>
         <Link to="/category/Lannister">Lannister</Link>
         <Link to="/category/Beyondthewall">Beyond the Wall</Link>
         <Link to="/category/Others">Others</Link>
         <Link to="/cart"><img className="cart" src={cart} alt="cart" />{totalItem()}</Link>
      </ul>
    </div>
  );
}
