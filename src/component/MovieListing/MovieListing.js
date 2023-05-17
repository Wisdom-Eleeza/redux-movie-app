import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import './MovieListing.scss'

//using useSelector to fetch all movies and display...
const MovieListing = () => {
  const moviesSelector = useSelector(getAllMovies); //getAllMovies function from movieSlice.js
  // console.log("moviesSelector::", moviesSelector);
  let renderMovies = "";
 
  renderMovies =
  // console.log("renderMovies::", renderMovies);
  moviesSelector.Response === "True" ? (
    moviesSelector.Search.map((movie, index) => {
      //prop of (data) has been passed and will be used in (MovieCard)
      // console.log('movie::', movie)
      return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{moviesSelector.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
    </div>
  );
};

export default MovieListing;
