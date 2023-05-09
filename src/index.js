import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Import Material-UI components
import { Container, Typography, Button } from '@mui/material';

function* rootSaga() {
  yield takeEvery('FETCH_MOVIES', fetchAllMovies);
}

function* fetchAllMovies() {
  try {
    const movies = yield axios.get('/api/movie');
    console.log('get all:', movies.data);
    yield put({ type: 'SET_MOVIES', payload: movies.data });
  } catch {
    console.log('get all error');
  }
}

const sagaMiddleware = createSagaMiddleware();

const movieItem = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIE_ITEM':
      return action.payload;
    default:
      return state;
  }
};

const movieId = (state = '', action) => {
  switch (action.type) {
    case 'SET_MOVIE_ID':
      return action.payload;
    default:
      return state;
  }
};

const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
};

const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
};

const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    movieItem,
    movieId,
  }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      {/* Wrap your app in a Material-UI container */}
      <Container>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Welcome to my Movie Saga
        </Typography>
        <App />
      </Container>
    </Provider>
  </React.StrictMode>
);

