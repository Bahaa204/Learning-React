import "../../assets/CSS/MovieCard.css";
import { useMovieContext } from "../contexts/Contexts.js";

export default function MovieCard({ movie }) {
  const { addFavorite, removeFavorite, isFavorite } = useMovieContext();

  function handleClick() {
    if (isFavorite(movie.id)) removeFavorite(movie.id);
    else addFavorite(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            onClick={handleClick}
            className={`favorite-btn ${isFavorite(movie.id) ? "active" : ""}`}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}
