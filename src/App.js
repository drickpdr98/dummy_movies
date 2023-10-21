import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchMovieHandler = function () {
    fetch("https://swapi.dev/api/films")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);

        console.log(data);
      });
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!loading && <MoviesList movies={movies} />}{" "}
        {loading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
