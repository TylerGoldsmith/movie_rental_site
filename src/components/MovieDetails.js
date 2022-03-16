// dependencies
import { useState, useEffect } from "react";
// components

function MovieDetails(props) {
  let { Movie } = props.Searchbar.searchTerm;
  let [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const API_URL = `${process.env.PG_URI}/${Movie}`;
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const resData = await response.json();
      console.log(resData);
      setMovieData(resData.results);
    };
    fetchData();
  }, [Movie]);

  return (
    <div>
      <p>
        {movieData.title}
        <br />
        {movieData.synopsis}
        <br />
        {movieData.year_released}
        <br />
        <p>test</p>
        {movieData.actor}
        <button>Rent Movie</button>
      </p>
    </div>
  );
}
export default MovieDetails;

// let navigate = useNavigate();
// const routeSearch = () => {
//     let path = `/movie/${props.Movie}`;
//     navigate(path);
//     console.log(Searchbar.props.searchTerm)
// };
