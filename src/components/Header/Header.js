import logo from "./logoFunkoGoT.png";
import NavBar from "../Navbar/NavBar";
import "./Header.css";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link  to={"/"}>
        <img 
        className="logo" 
        src={logo} 
        alt="logo"
        />
        </Link>
      <NavBar />
    </header>
  );
}
