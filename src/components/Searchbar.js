// Searchbar.js
import { useState } from 'react'

const Searchbar = () => {
  let [SearchTerm, setSearchTerm] = useState('')

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

export default Searchbar;
