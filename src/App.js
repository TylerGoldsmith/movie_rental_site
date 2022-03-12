// dependencies
import React, {useState, useEffect} from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'

// import styling
import "./App.css";
// import components
import Gallery from "./components/Gallery";
import Searchbar from "./components/Searchbar";
import MovieDetails from "./components/MovieDetails";
import ActorDetails from "./components/ActorDetails"

// render app
function App() {


  return (
    <div className="App">
      {message}
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <div>
            <Searchbar handleSearch={handleSearch} />
            <Gallery data={data} />
          </div>
        } />
        <Route path="/movie/:movie_id" element={
          <MovieDetails />
        } />
                <Route path="/actor/:actor_id" element={
          <ActorDetails />
        } />
  
      </Routes>
    </BrowserRouter>
  </div>

    
  );
}
// export
export default App;
