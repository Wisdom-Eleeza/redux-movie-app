import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import MoviesAPI from "../../common/apis/MoviesAPI";
import { APIKey } from "../../common/apis/MovieAPIKey";
import { useDispatch } from "react-redux";
import { addMoviesAction } from "../../features/movies/movieSlice";

const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MoviesAPI.get(
        `?APIKey=${APIKey}&s=${movieText}&type=movie`
      ).catch((err) => {
        console.log("Err:", err);
      });
      console.log("Response from API", response);
      dispatch(addMoviesAction(response.data))
    };
    fetchMovies();
  }, []);

  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  );
};

export default Home;
