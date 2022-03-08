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
  let [searchTerm, setSearchTerm] = useState('')
  let [data, setData] = useState([])
  let [message, setMessage] = useState('Movie Rentals')

  useEffect(() => {
    if (searchTerm) {
      document.title=`${searchTerm} Music`
      const fetchData = async () => {
        const response = await fetch(`PG_URI${searchTerm}`)
        const resData = await response.json()
        if(resData.results.length > 0) {
          setData(resData.results)
        } else {
          setMessage('Not Found')
        }
      }
      fetchData()
    }
  }, [searchTerm])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearchTerm(term)
  }

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
