import MovieGrid from "./Components/MovieGrid";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";

export default function Home() {
  return (
    <>
      <Header />
      <SearchBar />
      <MovieGrid />
    </>
  );
}