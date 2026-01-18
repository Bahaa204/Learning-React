import MovieGrid from "../Components/MovieGrid";
import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import { useState } from "react";

export default function Home() {
  const [SearchInput, setSearchInput] = useState("");

  return (
    <>
      <Header />
      <SearchBar SearchInput={SearchInput} setSearchInput={setSearchInput} />
      <MovieGrid SearchInput={SearchInput} />
    </>
  );
}
