export default function SearchBar() {
  function handleSubmit() {}

  return (
    <form onSubmit={handleSubmit} className="SearchBar">
      <input type="text" placeholder="Search Movies" />
      <button type="submit">Search</button>
    </form>
  );
}
