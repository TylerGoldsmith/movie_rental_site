// dependencies
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
// components
import MovieDetails from "./MovieDetails";
import Searchbar from "./Searchbar"

const GalleryItem = (props) => {
    let { Movie } = props.Searchbar.searchTerm;
    let [movieData, setMovieData] = useState([]);

    useEffect(() => {
        const API_URL = `PG_URI${Movie}`;
        const fetchData = async () => {
            const response = await fetch(API_URL);
            const resData = await response.json();
            console.log(resData)
            setMovieData(resData.results);
        };
        fetchData();
    }, [Movie]);
  return(
      <div>
          <h1>Gallery Item Test</h1>
      {Searchbar.props.title}
      
          
          </div>
  )
};
export default GalleryItem;
