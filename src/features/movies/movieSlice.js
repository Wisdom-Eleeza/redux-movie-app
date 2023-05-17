import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {},
};

//actions are created in the reducer
const movieSlice = createSlice({
  name: 'movies', //name of the slice
  initialState,
  reducers: {
    //inside the reducer is the action
    addMoviesAction: (state, { payload }) => {
        state.movies = payload //updating the state of the movies
    },
  },
});

export const { addMoviesAction } = movieSlice.actions;
//getting value from the store              name: movies and (property) movies in the initialState
export const getAllMovies = (store) => store.movies.movies
export default movieSlice.reducer
