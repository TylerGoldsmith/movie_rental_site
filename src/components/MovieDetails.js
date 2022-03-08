// dependencies


function MovieDetails(props) {
  return(
    <div>
    <h1>Movie Details here</h1>
    <p><a href="/movie/`${movie_id}`">Movie Page</a></p>
    {/* replace href with query using db */}
  </div>
    )
};
export default MovieDetails;
