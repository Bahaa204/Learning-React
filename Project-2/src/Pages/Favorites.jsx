import "../../assets/CSS/Favorites.css";
import NavBar from "../Components/NavBar";

export default function Favorites() {
  return (
    <>
      <NavBar />
      <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your favorites and they will appear here!</p>
      </div>
    </>
  );
}
