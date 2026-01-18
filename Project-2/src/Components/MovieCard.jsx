export default function MovieCard({ movie }) {
  return (
    <div className="MovieCard">
      <img src={movie.img || null} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Description: {movie.description}</p>
      <p>Release Date: {movie.release_date}</p>
    </div>
  );
}
