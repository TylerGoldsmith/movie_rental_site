// dependencies
// components
import MovieDetails from "./MovieDetails";
import { Link } from "react-router-dom";

const GalleryItem = (props) => {
  return (
    <div>
      <h1>Gallery Item Test</h1>
      {props.item.title}
      <Link to={`/movie/:${props.item.movie_id}`}></Link>
      {/* <p><a href=`/movie/${movie_id}`>Movie Page</a></p> */}
    </div>
  );
};
export default GalleryItem;
