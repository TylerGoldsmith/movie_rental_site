// dependencies
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// components
import Searchbar from "./Searchbar";

function MovieDetails(props) {
    let { Movie } = Searchbar.props.searchTerm;
    let [movieData, setMovieData] = useState([]);

    useEffect(() => {
        const API_URL = `${process.env.PG_URI}/Movie/${Movie}`;
        const fetchData = async () => {
            const response = await fetch(API_URL);
            const resData = await response.json();
            console.log(resData)
            setMovieData(resData.results);
        };
        fetchData();
    }, [Movie]);
  
  return (
    <div>
      <p>
        {/* {movieMap.title}
        <br />
        {movieMap.synopsis}
        <br />
        {movieMap.year_released}
        <br />
        <p>test</p> */}
        {/* make array of actors with links */}
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
