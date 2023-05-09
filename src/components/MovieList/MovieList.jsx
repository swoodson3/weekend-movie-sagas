import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => { // Iterate through each movie in the movies array
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3> {/* //Display the movie title */}
                            <img src={movie.poster} alt={movie.title}/>
                            {/* Display the movie poster image */}
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;