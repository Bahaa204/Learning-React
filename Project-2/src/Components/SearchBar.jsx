import "../../assets/CSS/SearchBar.css";

export default function SearchBar({ SearchInput, setSearchInput }) {
  function handleInputChange(event) {
    setSearchInput(event.target.value);
  }

  function handleKey(event) {
    if (event.key === "Enter") {
      setSearchInput("");
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search Movies"
        onKeyUp={handleKey}
        onChange={handleInputChange}
        value={SearchInput}
      />
    </>
  );
}
