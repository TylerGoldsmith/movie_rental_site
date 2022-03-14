// dependencies
import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

// import styling
import "./App.css";
// import components
import Gallery from "./components/Gallery";
import Searchbar from "./components/Searchbar";
import MovieDetails from "./components/MovieDetails";
import ActorDetails from "./components/ActorDetails"

// render app
function App() {
  let [data, setData] = useState([]);


  return (

    <div className="App">
      <BrowserRouter>
        <Searchbar />
        <Routes>
          <Route exact path="/" element={
            <div>

              <Gallery data={data} />
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
