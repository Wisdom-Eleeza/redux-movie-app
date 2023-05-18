import React from "react";
import Slider from "react-slick";
import { settings } from "../../common/settings";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

//using useSelector to fetch all movies and display...
const MovieListing = () => {
  const moviesSelector = useSelector(getAllMovies); //getAllMovies function from movieSlice.js
  const showsSelector = useSelector(getAllShows); //getAllMovies function from movieSlice.js
  // console.log("moviesSelector::", moviesSelector);
  let renderMovies = "";
  let renderShows = "";

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
  renderShows =
    // console.log("renderMovies::", renderMovies);
    showsSelector.Response === "True" ? (
      showsSelector.Search.map((movie, index) => {
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
        <div className="movie-container">
         <Slider {...settings}>{renderMovies}</Slider> 
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
        <Slider {...settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
