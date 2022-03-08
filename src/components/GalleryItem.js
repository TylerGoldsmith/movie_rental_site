// dependencies
// components
import MovieDetails from './MovieDetails'

const GalleryItem = () => {
  return(
      <div>
        <h1>
          Gallery Item Test
          </h1>
          <MovieDetails />
          <p><a href="/movie/`${movie_id}`">Movie Page</a></p>
          </div>
  )
};
export default GalleryItem;
