// dependencies
import { Link } from 'react-router-dom'
// components
import MovieDetails from "./MovieDetails";
import { Link } from "react-router-dom";

const GalleryItem = () => {
  return(
      <div>
          <h1>Gallery Item Test</h1>
      {props.title}
      <Link to={`/movie/:${props.movie_id}`}></Link>
          
          </div>
  )
};
export default GalleryItem;
