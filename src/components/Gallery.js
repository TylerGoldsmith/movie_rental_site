// dependencies
import { useContext, useState, useEffect } from "react";
// context
import { DataContext } from "../context/DataContext";
// import controller
import GalleryItem from "./GalleryItem";


const Gallery = (props) => {

  const renderMovieDetails = props.data.map((item, index) => {
    return (
      <div key={index}>
        <p>
          <GalleryItem key={index} item={item} />
        </p>
      </div>
    );
  })
  return(
    <div>
      {renderMovieDetails}
    </div>
  )
};

export default Gallery;
