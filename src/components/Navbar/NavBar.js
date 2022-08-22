import "./NavBar.css";
import cart from "./bx-cart.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  // const menu = [
  //   { key: 1, url: "/home", tittle: "Home" },
  //   { key: 2, url: "/category/stark", tittle: "House Stark" },
  //   { key: 3, url: "/category/lannister", tittle: "House Lannister" },
  //   { key: 4, url: "/category/beyondthewall", tittle: "Beyond the Wall" },
  //   { key: 5, url: "/category/others", tittle: "Others" },
  // ];

  return (
    <div>
      <ul className="navbar">
         <Link to="/">Home</Link>
         <Link to="/category/Stark">Stark</Link>
         <Link to="/category/Lannister">Lannister</Link>
         <Link to="/category/Beyondthewall">Beyond the Wall</Link>
         <Link to="/category/Others">Others</Link>
         <Link to="/cart"><img className="cart" src={cart} alt="cart" /></Link>
      </ul>
    </div>
  );
}
