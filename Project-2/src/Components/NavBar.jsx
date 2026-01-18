import "../../assets/CSS/Navbar.css"

export default function NavBar() {
  return (
    <header>
      <p>Movie App</p>
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="favorites">Favorites</a>
      </nav>
    </header>
  );
}
