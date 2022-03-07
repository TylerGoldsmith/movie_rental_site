// dependencies
import React, {useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
// import styling
import "./App.css";
// import components
import Gallery from "./components/Gallery";
import Searchbar from "./components/Searchbar";

// render app
function App() {
  return (
    <div className="App">
      <Searchbar />
      <Gallery />
    </div>
  );
}
// export
export default App;
