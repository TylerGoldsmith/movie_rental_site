// dependencies
import React from 'react';

// searchbar
function Searchbar(props) {

  let term = props.searchTerm;



return (
  <form>
    <input
      type="text"
      placeholder="Search Our Movie Library Here"
      value={term}
      onChange={(e) => { props.setTerm(e.target.value); 
      console.log(props.searchTerm) }}
    />
  </form>
);
}
export default Searchbar;
