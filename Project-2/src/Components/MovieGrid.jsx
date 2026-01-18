import { useState } from "react";
import MovieCard from "./MovieCard";

export default function MovieGrid() {
  const [Movies, setMovies] = useState([
    {
      id: crypto.randomUUID(),
      img: "",
      title: "Test Movie",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quisquam et repellat quo ut dolores nulla quae reprehenderit minus quam rem vero maiores deleniti exercitationem neque fuga velit, qui tempora!",
      release_date: 2025,
    },
    {
      id: crypto.randomUUID(),
      img: "",
      title: "Test Movie 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quisquam et repellat quo ut dolores nulla quae reprehenderit minus quam rem vero maiores deleniti exercitationem neque fuga velit, qui tempora!",
      release_date: 2020,
    },
  ]);
  return (
    <div className="MovieGrid">
      {Movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
