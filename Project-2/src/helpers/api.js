const API_KEY = import.meta.env.VITE_MOVIEDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export function sortMovies(movies) {
  return movies.sort((movie1, movie2) => {
    const year1 = parseInt(movie1.release_date.substring(0, 4));
    const year2 = parseInt(movie2.release_date.substring(0, 4));
    return year2 - year1;
  });
}
export async function getPopularMovies() {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
}
export async function searchMovies(query) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`,
  );
  const data = await response.json();
  return data.results;
}
