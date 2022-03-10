// dependencies
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'


function MovieDetails(props) {
  const { movie_id } = useParams();
  const [movieData, setMovieData] = useState([]);

  // get Actor in db
  useEffect(() => {
    const API_URL = `PGURI/${movie_id}`;
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const resData = await response.json();
      console.log(resData)
      setMovieData(resData.results);
    };
    fetchData();
  }, [movie_id]);

  // to be changed
  // render actor detail
  const renderMovieDetails = movieData.map((movieMap, i) => {
    return (
      <div key={i}>
        <p>
          {movieMap.title}
          <br />
          {movieMap.synopsis}
          <br />
          {movieMap.year_released}
          <br />
          {/* make array of actors with links */}
        </p>
      </div>
    )
  })

  // what gets shown
  return (
    <div>
      <h1>{renderMovieDetails}</h1>
    </div>
  )
};
export default MovieDetails;
