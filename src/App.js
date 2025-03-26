import React from "react";
import Navbar from "./components/Navbar";
import MovieCarousel from "./components/Carousel";
import MoviesList from "./components/MoviesList";

const App = () => {
  return (
    <div>
      <Navbar />
      <MovieCarousel />
      <MoviesList />
    </div>
  );
};

export default App;
