import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {},
};

//actions are created in the reducer
const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMoviesAction: (state, { payload }) => {
        state.movies = payload
    },
  },
});

export const { addMoviesAction } = movieSlice.actions;
//getting value from the store              name: movies and (property) movies in the initialState
export const getAllMovies = state => state.movies.movies
export default movieSlice.reducer
