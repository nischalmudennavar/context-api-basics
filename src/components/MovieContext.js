import React, { useState, createContext } from "react";


export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "The Shawshank Redemption",
      year: "1994",
      director: "Frank Darabont",
      duration: "142 min",
    },
    {
      name: "The Godfather",
      year: "1972",
      director: "Francis Ford Coppola",
      duration: "2h 46min",
    },
    {
      name: "The Godfather: Part II",
      year: "1974",
      director: "Francis Ford Coppola",
      duration: "2h 46min",
    },
    {
      name: "The Dark Knight",
      year: "2008",
      director: "Christopher Nolan",
      duration: "152 min",
    },
  ]);
  return (
    <MovieContext.Provider value={[movies,setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
