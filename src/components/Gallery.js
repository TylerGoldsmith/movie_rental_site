// dependencies

import { useEffect, useState, useContext } from "react";
import { DataContext } from '../context/DataContext';

// import controller
import GalleryItem from "./GalleryItem";
import Searchbar from "./Searchbar"

function Gallery(props) {
  const data = useContext(DataContext);
  let { Movie } = data;
  let [movieData, setMovieData] = useState([]);
  console.log(Movie);
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


  const display = movieData.map((item, index) => {
    return <GalleryItem item={item} key={index} />;
  });

  return (<div>{display}</div>);
}

export default Gallery;