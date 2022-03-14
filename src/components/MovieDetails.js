// dependencies
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// components
import Searchbar from './Searchbar';


function MovieDetails(props) {
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

  // to be changed
  // render actor detail
  const renderMovieDetails = movieData.map((movieMap, i) => {
    return (
      <div key={i}>
        <p>
          {movieMap.title}
          <br />
          {movieMap.synopsis}
          <br />
          {movieMap.year_released}
          <br />
          <p>test</p>
          {/* make array of actors with links */}
        </p>
      </div>
    )
  })
  console.log(renderMovieDetails + "moviedetails")
  console.log(movieData + "moviedata")

  // what gets shown
  return (
    <div>
      <h1>{renderMovieDetails}</h1>
    </div>
  )
};
export default MovieDetails;

// let navigate = useNavigate();
// const routeSearch = () => {
//     let path = `/movie/${props.Movie}`;
//     navigate(path);
//     console.log(Searchbar.props.searchTerm)
// };
