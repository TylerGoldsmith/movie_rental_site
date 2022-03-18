// dependencies

import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


// import styling
import "./App.css";
// import components
import Gallery from "./components/Gallery";
import Searchbar from "./components/Searchbar";
import MovieDetails from "./components/MovieDetails";
import ActorDetails from "./components/ActorDetails";

// render app
function App() {
  let [searchTerm, setSearchTerm] = useState("");
  let [data, setData] = useState([]);
  let [message, setMessage] = useState("Movie Rentals");


  useEffect(() => {
    console.log(searchTerm)
    if (searchTerm) {
      document.title = `${searchTerm} Movie`;
      const fetchData = async () => {
        const response = await fetch(`${process.env.REACT_APP_PG_URI}/${searchTerm}`);
        const resData = await response.json();
        if (resData.results.length > 0) {
          setData(resData.results); 
          console.log(resData.results)
        } else {
          console.log("no data")
          setMessage("Not Found");
        }
      };
      fetchData();
    }
  }, [searchTerm]);

  return (

    <div className="App">
      <BrowserRouter>
        <Searchbar setTerm={setSearchTerm}
        searchTerm={searchTerm} />
        <Routes>
          <Route exact path="/" element={
            <div>

              <Gallery 
              data={data}/>
            </div>
          } />
          <Route path="/movie/:movie_id" element={
            <div>

              <MovieDetails />
            </div>
          } />
          <Route path="/actor/:actor_id" element={
            <div>

              <ActorDetails />
            </div>
          } />

        </Routes>
      </BrowserRouter>
    </div>

  );
}
// export
export default App;
