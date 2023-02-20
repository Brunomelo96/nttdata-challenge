import { createReducer } from "@reduxjs/toolkit"
import { Movie } from "@/models/interfaces/movie.interface";
import { setSelectedMovie } from "./movie.actions";

interface MovieState {
  selectedMovie: Movie | null,
}

const initialState: MovieState = {
  selectedMovie: null,
}

export const movieReducer = createReducer(initialState, (builder) => {
  builder.addCase(setSelectedMovie, (state, action) => ({
    ...state,
    selectedMovie: action.payload,
  }))
})