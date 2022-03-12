// dependencies
import { Link } from 'react-router-dom'
// components
import MovieDetails from "./MovieDetails";

const GalleryItem = (props) => {
  return(
      <div>
          <h1>Gallery Item Test</h1>
      {props.title}
      <Link to={`/movie/:${props.movie_id}`}></Link>
          
          </div>
  )
};
export default GalleryItem;
