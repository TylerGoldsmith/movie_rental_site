// dependencies
import { Link } from "react-router-dom";


const GalleryItem = (props) => {

  let movieData = props.item
  
  
  // what gets shown
  return(<div key={props.key}>
        <p>
          {movieData.title}
          <br />
          {movieData.year_released}
          <br />
          <Link to={`/movie/${movieData.movie_id}`}>
            More Details
          </Link>
          <button>Rent Movie</button>
        </p>
      </div>)
};
export default GalleryItem;