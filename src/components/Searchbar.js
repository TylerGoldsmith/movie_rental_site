// dependencies
import React, { useState } from 'react'

// searchbar
const Searchbar = (props) => {
    const [searchTerm, setSearchTerm] = useState('')

    return (
            <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
                <input type="text" placeholder="Search Our Movie Library Here" onChange={(e) => setSearchTerm(e.target.value)} />
                <input type="submit" />
            </form>
    )
}
export default Searchbar