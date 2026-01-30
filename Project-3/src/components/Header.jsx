import NavBar from "./NavBar";
import "../../assets/CSS/Header.css"

export default function Header() {
  return (
    <header className="navbar">
      <a href="/CookLab/index.html" className="logo">
        🍳 CookLab
      </a>
      <NavBar />
    </header>
  );
}
