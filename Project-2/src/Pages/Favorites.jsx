import "../../assets/CSS/Favorites.css";
import NavBar from "../Components/NavBar";
import MovieCard from "../Components/MovieCard";
import { useMovieContext } from "../contexts/Contexts";

export default function Favorites() {
  const { Favorites } = useMovieContext();

  return (
    <>
      <NavBar />
      {Favorites.length >= 1 ? (
        <div className="MovieGrid">
          {Favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <div className="favorites-empty">
          <h2>No Favorite Movies Yet</h2>
          <p>
            Start adding movies to your favorites and they will appear here!
          </p>
        </div>
      )}
    </>
  );
}
