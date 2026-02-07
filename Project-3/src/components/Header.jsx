import NavBar from "./NavBar";
import Logo from "../../assets/Images/Header-logo-pixelated.png";
import { Link } from "react-router-dom";
import "../../assets/CSS/Header.css";

export default function Header() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" />
      </Link>
      <NavBar />
    </header>
  );
}
