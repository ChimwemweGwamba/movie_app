import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StoreProvider, createStore, action } from "easy-peasy";
import Home from './pages/home';
import Favourites from './pages/favourites';


const store = createStore({
  movies: [],
  
  // Actions
  addMovies: action((state, movies) => {
    for(let i=0; i<movies.length; i++){
      movies[i]["favourite"] = false;
    }

    state.movies = movies;
  }),

  addFavourite: action((state, id) => {
    let arr = JSON.parse(JSON.stringify(state.movies))

    for(let i =0; i < arr.length; i++){
      if(arr[i].id === id){
        arr[i].favourite = !arr[i].favourite
      }
    }

    state.movies = arr;
  })
  
});


function App() {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/liked" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
