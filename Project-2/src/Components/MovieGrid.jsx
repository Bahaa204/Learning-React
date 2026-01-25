import { useEffect } from "react";
import MovieCard from "./MovieCard";
import "../../assets/CSS/MovieGrid.css";
import { getPopularMovies, sortMovies } from "../helpers/api";

export default function MovieGrid({
  Movies,
  setMovies,
  error,
  setError,
  loading,
  setLoading,
}) {
  async function loadPopularMovies() {
    try {
      const movies = await getPopularMovies();
      setMovies(sortMovies(movies));
    } catch (error) {
      console.log(error);
      setError("Failed to load Movies...");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPopularMovies();
  }, []);

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
