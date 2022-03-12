// dependencies
import React, { useState } from 'react';
import  { useNavigate } from 'react-router';

// searchbar
const Searchbar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    let navigate = useNavigate();

    const searchRoute = () => {
        let path = `/search`;
        navigate(path);
    }

    return (
            <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
                <input type="text" 
                    placeholder="Search Our Movie Library Here" 
                    onChange={(e) => setSearchTerm(e.target.value)} />
                <input type="submit"
                    onClick={searchTerm} />
            </form>
    )
}
export default Searchbar