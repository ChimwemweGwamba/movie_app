import React, { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Favourites from "./pages/favourites";
import ViewMovie from "./pages/viewMovie";
import { MovieListContext } from "./context/movieContext";

function App() {
  const movieReducer = (state, action) => {
    switch (action.type) {
      case "SET_MOVIE_LIST":
        if (state.movieList) {
          action.payload = [...state.movieList, ...action.payload];
        }
        return {
          ...state,
          movieList: action.payload,
        };

      case "SET_SELECTED_MOVIE":
        return {
          ...state,
          selectedMovie: action.payload,
        };

      case "SET_SIMILAR_MOVIES":
        return {
          ...state,
          similarMovies: action.payload,
        };

      case "ADD_FAVOURITE_MOVIE":
        for (let i = 0; i < state.movieList.length; i++) {
          if (state.movieList[i].id === action.payload) {
            state.movieList[i].favMovie = true;
            break;
          }
        }
        return {
          ...state,
        };

      case "REMOVE_FAVOURITE_MOVIE":
        for (let i = 0; i < state.movieList.length; i++) {
          if (state.movieList[i].id === action.payload) {
            state.movieList[i].favMovie = false;
            break;
          }
        }
        return {
          ...state,
        };

      default:
        throw new Error("No action");
    }
  };

  const [state, dispatch] = useReducer(movieReducer, {
    moviesList: [],
    selectedMovie: [],
    similarMovies: [],
    favouriteMovies: [],
  });

  return (
    <MovieListContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourites />} />
          <Route path="/movie/:movieId" element={<ViewMovie />} />
        </Routes>
      </BrowserRouter>
    </MovieListContext.Provider>
  );
}

export default App;
