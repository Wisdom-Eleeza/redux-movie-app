import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
// import MoviesAPI from "../../common/apis/MoviesAPI";
// import { APIKey } from "../../common/apis/MovieAPIKey";
import { useDispatch } from "react-redux";
// import { addMoviesAction} from "../../features/movies/movieSlice";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";

const Home = () => {
  // const movieText = "Harry";
  //after getting data from the api, we need to dispatch to the store
  // to update the store, so we are using (useDispatch)
  const dispatch = useDispatch();
  const movieText = 'Harry'
  const showText = 'Friends'
   
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(showText))
    // const fetchMovies = async () => {
    //   const response = await MoviesAPI.get(
    //     `?APIKey=${APIKey}&s=${movieText}&type=movie`
    //   ).catch((err) => {
    //     console.log("Err:", err);
    //   });
    //   // console.log("Response from API", response.data);
    //   // we dispatching the action we created in the reducer function
    //   // in the movieSlice
    //   dispatch(addMoviesAction(response.data))
    //   // (data) is the key which contains all the result
    // };
    // fetchMovies();
  }, [dispatch]);

  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  );
};

export default Home;
