import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

import "../App.css";

function MovieList() {
    const [movies,setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map((movie) => (
        <div className="movie-container">
         
          <Movie
            name={movie.name}
            year={movie.year}
            director={movie.director}
            duration={movie.duration}
          />
        </div>
      ))}
          
    </div>
  );
}

export default MovieList;
