import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import MoviesAPI from '../../common/apis/MoviesAPI'
import { APIKey } from "../../common/apis/MovieAPIKey";

const Home = () => {
  const movieText = 'Harry'
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MoviesAPI
      .get(`?APIKey=${APIKey}&s=${movieText}&type=movie`)
      .catch((err) => {
        console.log('Err:', err)
      })
      console.log('Response from API', response)
    }
    fetchMovies()
  }, [])
  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  );
};

export default Home;
