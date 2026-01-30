import NavBar from "./NavBar";
import Logo from "../../assets/Images/Header-logo-pixelated.png";
import "../../assets/CSS/Header.css";

export default function Header() {
  return (
    <header className="navbar">
      <a href="/" className="logo">
        <img src={Logo} alt="logo" />
      </a>
      <NavBar />
    </header>
  );
}
