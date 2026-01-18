import { useState } from "react";
import MovieCard from "./MovieCard";

export default function MovieGrid({ SearchInput }) {
  const [Movies, setMovies] = useState([
    {
      id: crypto.randomUUID(),
      img: "",
      title: "John Wick",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quisquam et repellat quo ut dolores nulla quae reprehenderit minus quam rem vero maiores deleniti exercitationem neque fuga velit, qui tempora!",
      release_date: 2025,
    },
    {
      id: crypto.randomUUID(),
      img: "",
      title: "Terminator",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quisquam et repellat quo ut dolores nulla quae reprehenderit minus quam rem vero maiores deleniti exercitationem neque fuga velit, qui tempora!",
      release_date: 2020,
    },
  ]);

  function filterMovies(title) {
    return title.trim().toLowerCase().includes(SearchInput);
  }

  return (
    <div className="MovieGrid">
      {Movies.map(
        (movie) =>
          filterMovies(movie.title) && (
            <MovieCard movie={movie} key={movie.id} />
          ),
      )}
    </div>
  );
}
