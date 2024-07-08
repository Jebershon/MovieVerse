import Home from "./Components/Home";
import SearchShows from "./Components/Search";
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import MovieDetails from './Components/MovieDetails';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movie/:id" element={<MovieDetails/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
