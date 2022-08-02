import "./NavBar.css";
import cart from "./bx-cart.svg";

export default function NavBar() {
  return (
    <div>
      <ul className="navbar">
        <a href="#">Gryffindor</a>
        <a href="#">Hufflepuff</a>
        <a href="#">Ravenclaw</a>
        <a href="#">Slytherin</a>
         <img className="cart" src={cart} alt="cart" />
      </ul>
    </div>
  );
}
