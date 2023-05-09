import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
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
      <Card sx={{ maxwidth: 200, margin: 3}}>
      <h2>{movie.title}</h2>
      <img onClick={detailsPush} src={movie.poster} alt={movie.title} />
      </Card>
    </div>
  )
}

export default MovieItem;