import { useState } from "react";
export default function SearchBar() {
  const [SearchInput, setSearchInput] = useState("");

  function handleInputChange(event) {
    setSearchInput(event.target.value);
  }

  function handleClick() {
    if (SearchInput != "") {
      setSearchInput("");
    }
  }

  function handleKey(event) {
    if (event.key === "Enter") {
      handleClick();
    }
  }

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search Movies"
        onKeyUp={handleKey}
        onChange={handleInputChange}
        value={SearchInput}
      />
      <button type="submit" onClick={handleClick}>
        Search
      </button>
    </div>
  );
}
