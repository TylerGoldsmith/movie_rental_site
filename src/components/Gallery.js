// dependencies
import { useContext } from "react";
import { useEffect, useState } from "react";

// context
import { DataContext } from "../context/DataContext";
// import controller
import GalleryItem from "./GalleryItem";

function Gallery(props) {
  const data = useContext(DataContext);

  let { Movie } = props.Searchbar.searchTerm;
  let [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const API_URL = `PG_URI${Movie}`;
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const resData = await response.json();
      console.log(resData);
      setMovieData(resData.results);
    };
    fetchData();
  }, [Movie]);


  const display = movieData.map((item, index) => {
    return <GalleryItem item={item} key={index} />;
  });

  return (<div>{display}</div>);
}

export default Gallery;
