import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Favourites from './pages/favourites';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/liked" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
