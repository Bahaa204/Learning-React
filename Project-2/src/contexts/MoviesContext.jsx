import { useEffect, useState } from "react";
import { MovieContext } from "./Contexts";

export function MovieProvider({ children }) {
  const [Favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || [],
  );

  const [Movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(Favorites));
  }, [Favorites]);

  function addFavorite(movie) {
    setFavorites([...Favorites, movie]);
  }

  function removeFavorite(movieID) {
    setFavorites(Favorites.filter((movie) => movie.id !== movieID));
  }

  function isFavorite(movieID) {
    return Favorites.some((movie) => movie.id === movieID);
  }

  const value = {
    Favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    Movies,
    setMovies,
    error,
    setError,
    loading,
    setLoading,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
}
