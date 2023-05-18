import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MoviesAPI from "../../common/apis/MoviesAPI";
import { APIKey } from "../../common/apis/MovieAPIKey";

// fetching all the movies with the help of the asyncThunk middleware
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    // const movieText = "Harry";
    const response = await MoviesAPI.get(
      `?APIKey=${APIKey}&s=${term}&type=movie`
    );
    // console.log("Response from API", response.data);
    // we dispatching the action we created in the reducer function
    // in the movieSlice
    return response.data;
    // (data) is the key which contains all the result
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    // const seriesText = "Friends";
    const response = await MoviesAPI.get(
      `?APIKey=${APIKey}&s=${term}&type=series`
    );
    // console.log("Response from API", response.data);
    // we dispatching the action we created in the reducer function
    // in the movieSlice
    return response.data;
    // (data) is the key which contains all the result
  }
);
export const fetchAsyncMoviesOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMoviesOrShowDetail",
  async (id) => {
    const response = await MoviesAPI.get(`?APIKey=${APIKey}&i=${id}&Plot=full`);
    // console.log("Response from API", response.data);
    // we dispatching the action we created in the reducer function
    // in the movieSlice
    return response.data;
    // (data) is the key which contains all the result
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

//actions are created in the reducer
const movieSlice = createSlice({
  name: "movies", //name of the slice
  initialState,
  reducers: {
    //inside the reducer is the action
    // addMoviesAction: (state, { payload }) => {
    //   state.movies = payload; //updating the state of the movies
    // }, this addMoviesAction is no longer need cos already in the asyncFunction
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {}
    }
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, movies: payload };
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, shows: payload };
    },
    [fetchAsyncMoviesOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, selectedMovieOrShow: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
// export const { addMoviesAction } = movieSlice.actions;
//getting value from the store              name: movies and (property) movies in the initialState
export const getAllMovies = (store) => store.movies.movies;
export const getAllShows = (store) => store.movies.shows;
export const selectedMovieOrShow = (store) => store.movies.shows;
export const getSelectedMoviesOrShow = (store) =>
  store.movies.selectedMovieOrShow;
export default movieSlice.reducer;
