// dependencies
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// components
import Searchbar from "./Searchbar";

const GalleryItem = (props) => {
  let { Movie } = Searchbar.props.searchTerm;
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
  const renderMovieDetails = movieData.map((movieMap, i) => {
    return (
      <div key={i}>
        <p>
          {movieMap.year_released}
          <br />
          <Link to={`/movie/${props.item.title}`}>
            {props.item.title}
          </Link>
        </p>
      </div>
    );
  });
  // what gets shown
  return <div>{renderMovieDetails}</div>;
};
export default GalleryItem;
