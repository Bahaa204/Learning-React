import MovieCard from "./MovieCard";
import "../../assets/CSS/MovieGrid.css";
import { useMovieContext } from "../contexts/Contexts";

export default function MovieGrid({ Movies }) {
  const { error, loading} = useMovieContext();

  return (
    <>
      {error && <div className="error-message">Error: {error}</div>}

      {loading ? (
        <div className="loading">Loading Movies Please Wait!</div>
      ) : (
        <div className="MovieGrid">
          {Movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </>
  );
}
