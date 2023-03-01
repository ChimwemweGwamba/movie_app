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
      case "SET_FAVOURITE_MOVIES":
        return {
          ...state,
          movieList: action.payload,
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
          <Route path="/liked" element={<Favourites />} />
          <Route path="/movie/:movieId" element={<ViewMovie />} />
        </Routes>
      </BrowserRouter>
    </MovieListContext.Provider>
  );
}

export default App;
