import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/recipe-book">Recipe Book</Link>
      <Link to="/request">Request a Recipe</Link>
      <Link to="/daaboolos">Ask Daaboolos</Link>
    </nav>
  );
}
