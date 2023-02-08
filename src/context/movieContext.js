import React, { createContext, useContext } from "react";

const MovieListContext = createContext();
const useMovieList = () => useContext(MovieListContext);

const MovieContext = createContext();
const useMovie = () => useContext(MovieContext);

export { MovieListContext, useMovieList, MovieContext, useMovie };
