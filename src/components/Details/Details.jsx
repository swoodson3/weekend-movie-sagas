import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function Details() {
  const history = useHistory();
  const dispatch = useDispatch();

  const movieItem = useSelector(store => store.movieItem);
  const movieId = useSelector(store => store.movieId);

  const fetchMovieItem = () => {
    axios.get(`/api/movie/${movieId}`).then((response) => {
      console.log(`Response data: ${response.data}`);
      const action = {
        type: 'SET_MOVIE_ITEM',
        payload: response.data
      }
      dispatch(action);
    }).catch((error) => {
      console.log(`Error in fetchMovieItem: ${error}`);
      alert(`Something went quite wrong.`)
    })
  } // end fetchMovieItem

  const homeButton = () => {
    history.push('/');
  }

  useEffect(() => {
    fetchMovieItem()
  }, [])

  return (
    <>
      <h1>Details Page</h1>
      <hr />
      {
        movieItem.map(movie => (
          <div key={movie.id}>
            <h3>{movie.movie_title}</h3>
            <br />
            <img src={movie.poster} />
            <br />
            <b>{movie.genres}</b>
            <br />
            <i>{movie.description}</i>
          </div>
        ))
      }
      <button onClick={homeButton}>Back to List</button>
    </>
  )
}

export default Details;