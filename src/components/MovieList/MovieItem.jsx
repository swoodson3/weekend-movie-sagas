import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './MovieList.css'

function MovieItem({ movie }) {
  const history = useHistory();
  const dispatch = useDispatch();
  

  const detailsPush = () => {
    dispatch({ type: 'SET_MOVIE_ID', payload: movie.id})
    console.log(`movie id: ${movie.id}`);
    history.push('/details');
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <img onClick={detailsPush} src={movie.poster} alt={movie.title} />
    </div>
  )
}

export default MovieItem;