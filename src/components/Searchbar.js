
// Searchbar.js
import { useState } from 'react'
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

const Searchbar = () => {
  let [SearchTerm, setSearchTerm] = useState('')
  // dependencies


  // searchbar
  function Searchbar() {

    const SearchTerm = useContext(SearchContext);

    const handleSearch = (e) => {
      e.preventDefault()
    }
    return (
      <form>
        <input ref={SearchTerm} type="text" placeholder="Search Here" />
        <button onClick={(e) => handleSearch(e, SearchTerm.current.value)}>Submit</button>

      </form>
    )
  }
}
export default Searchbar
