import MovieGrid from "../Components/MovieGrid";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import { useState } from "react";
import "../../assets/CSS/Home.css";

export default function Home() {
  const [Movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <div className="home">
      <NavBar />
      <SearchBar
        setMovies={setMovies}
        loading={loading}
        setLoading={setLoading}
        setError={setError}
      />
      <MovieGrid
        Movies={Movies}
        setMovies={setMovies}
        loading={loading}
        setLoading={setLoading}
        error={error}
        setError={setError}
      />
    </div>
  );
}
