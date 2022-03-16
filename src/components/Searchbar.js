// dependencies
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

// searchbar
function Searchbar() {

  const { term, handleSearch } = useContext(SearchContext);

  return (
    <form>
      <input
        type="text"
        placeholder="Search Our Movie Library Here"
        ref={term}
        onChange={(e) => handleSearch(e, term.current.value)}
      />
      <button onClick={(e) => handleSearch(e, term.current.value)}>
        Search
      </button>
    </form>
  );
}
export default Searchbar;
