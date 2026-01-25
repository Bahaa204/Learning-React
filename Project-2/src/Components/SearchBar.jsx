import { useState } from "react";
import "../../assets/CSS/SearchBar.css";
import { searchMovies, sortMovies } from "../helpers/api.js";

export default function SearchBar({
  setMovies,
  setError,
  loading,
  setLoading,
}) {
  const [SearchInput, setSearchInput] = useState("");

  function handleInputChange(event) {
    setSearchInput(event.target.value);
  }

  async function search(query) {
    if (query.trim() == "" || loading) return;
    setLoading(true);

    try {
      const movies = await searchMovies(query);
      setMovies(sortMovies(movies));
      setError(null);
    } catch (error) {
      console.log(error);
      setError("Failed to search Movies...");
    } finally {
      setLoading(false);
      // setSearchInput("");
    }
  }

  function handleClick() {
    search(SearchInput);
  }

  function handleKey(event) {
    if (event.key === "Enter") {
      handleClick();
    }
  }

  return (
    <div className="SearchInput">
      <input
        type="text"
        placeholder="Search Movies"
        onKeyUp={handleKey}
        onChange={handleInputChange}
        value={SearchInput}
      />
      <button type="button" onClick={handleClick}>
        Search Movies
      </button>
    </div>
  );
}
