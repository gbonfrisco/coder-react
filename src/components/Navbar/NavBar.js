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
         <Link className="font-color" to="/">Home</Link>
         <Link className="font-color" to="/category/Stark">Stark</Link>
         <Link className="font-color" to="/category/Lannister">Lannister</Link>
         <Link className="font-color" to="/category/Beyondthewall">Beyond the Wall</Link>
         <Link className="font-color" to="/category/Others">Others</Link>
         {
          totalItem()>0 ?
          <Link to="/cart"><img className="cart" src={cart} alt="cart" />{totalItem()}</Link>
          : <></>
         }
         
      </ul>
    </div>
  );
}
