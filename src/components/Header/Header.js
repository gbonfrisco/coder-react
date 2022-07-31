import logo from "./logoHP.png";
import NavBar from "../Navbar/NavBar";

export default function Header() {
  return (
    <header>
      <a href="#" className="logo">
        <img src={logo} alt="logo"/>
      </a>
      <NavBar />
    </header>
  );
}
