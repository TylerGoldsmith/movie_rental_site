// dependencies
import { useState } from "react";

// searchbar
function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Our Movie Library Here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input type="submit" onClick={() => console.log("hi")} />
    </form>
  );
}
export default Searchbar;
