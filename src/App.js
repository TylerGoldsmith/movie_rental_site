// dependencies

import React, { useState, useEffect, useRef } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { DataContext } from "./context/DataContext";


// import styling
import "./App.css";
// import components
import Gallery from "./components/Gallery";
import Searchbar from "./components/Searchbar";
import MovieDetails from "./components/MovieDetails";
import ActorDetails from "./components/ActorDetails";
import { SearchContext } from "./context/SearchContext";
import { search } from './controllers/actors_controller';

// render app
function App() {
  let [searchTerm, setSearchTerm] = useState("");
  let [data, setData] = useState([]);
  let [message, setMessage] = useState("Movie Rentals");
  let searchInput = useRef("");

  useEffect(() => {
    if (searchTerm) {
      document.title = `${searchTerm} Movie`;
      const fetchData = async () => {
        const response = await fetch(`${process.env.PG_URI}/${searchTerm}`);
        const resData = await response.json();
        if (resData.results.length > 0) {
          setData(resData.results);
        } else {
          setMessage("Not Found");
        }
      };
      fetchData();
    }
  }, [searchTerm]);

  return (
    <div className="App">
      <BrowserRouter>
      <SearchContext.Provider
                  value={{
                    term: searchInput,
                    handleSearch: handleSearch,
                  }}
                >
                  <Searchbar />
                </SearchContext.Provider>


          <Routes>
            <Route exact path="/" element={
              <div>
                <DataContext.Provider>
                  <Gallery data={data} />
                </DataContext.Provider>
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
