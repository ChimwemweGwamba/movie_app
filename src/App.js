import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Favourites from "./pages/favourites";
import ViewMovie from "./pages/viewMovie";

const movieReducer = (state, action) => {
 // console.log("app page", action.payload);
  switch (action.type) {
    case "SET_MOVIE_LIST":
      return {
        ...state,
        movieList: action.payload,
      };
    case "SET_POPULAR_MOVIES":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      throw new Error("No action");
  }
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/liked" element={<Favourites />} />
          <Route path="/movie/:movieId" element={<ViewMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export { App, movieReducer };
