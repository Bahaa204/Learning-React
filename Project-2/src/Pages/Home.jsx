import MovieGrid from "../Components/MovieGrid";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import { useEffect } from "react";
import { getPopularMovies, sortMovies } from "../helpers/api";
import { useMovieContext } from "../contexts/Contexts";
import "../../assets/CSS/Home.css";

export default function Home() {
  const { setMovies, setError, setLoading, Movies } = useMovieContext();

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
    <div className="home">
      <NavBar />
      <SearchBar />
      <MovieGrid Movies={Movies} />
    </div>
  );
}
