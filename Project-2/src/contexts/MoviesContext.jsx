import { useEffect, useState } from "react";
import { MovieContext } from "./Contexts";

export function MovieProvider({ children }) {
  const [Favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || [],
  );

  useEffect(() => {
    localStorage.setItem("favorites", Favorites);
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
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
}
