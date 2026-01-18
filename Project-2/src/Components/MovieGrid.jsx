import MovieCard from "./MovieCard";

export default function movieGrid({ movies }) {
  return (
    <div className="MovieGrid">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
