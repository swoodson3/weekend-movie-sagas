import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details.jsx'

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>    
          {/* Route for the MovieList */}
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Route for the Details page */}
        <Route path="/details" exact>
          <Details />
        </Route>

        {/* Add Movie page */}


      </Router>
    </div>
  );
}


export default App;
