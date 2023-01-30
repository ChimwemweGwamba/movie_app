import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Favourites from './pages/favourites';
import ViewMovie from './pages/viewMovie';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/liked" element={<Favourites />} />
          <Route path="/movie" element={<ViewMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
