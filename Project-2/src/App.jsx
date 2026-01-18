import { useState } from "react";
import "../assets/CSS/App.css";
import MovieGrid from "./Components/MovieGrid";

function App() {
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
    <>
      <MovieGrid movies={Movies} />
    </>
  );
}

export default App;
