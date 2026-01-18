import MovieGrid from "../Components/MovieGrid";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import { useState } from "react";
import "../../assets/CSS/Home.css"

export default function Home() {
  const [SearchInput, setSearchInput] = useState("");

  return (
    <div className="home">
      <NavBar />
      <SearchBar SearchInput={SearchInput} setSearchInput={setSearchInput} />
      <MovieGrid SearchInput={SearchInput} />
    </div>
  );
}
