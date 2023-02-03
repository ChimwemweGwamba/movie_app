import React, { createContext, useContext } from "react";

const MovieListContext = createContext();

const useMovieList = () => useContext(MovieListContext);

export { MovieListContext, useMovieList };
