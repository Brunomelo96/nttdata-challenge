import { createReducer } from "@reduxjs/toolkit"
import { SearchedMovie } from "@/models/interfaces/movie.interface";
import { getMovieByTitle } from "./movie.actions";

type Loading = "default" | "pending" | "fulfilled" | "rejected"

interface MovieState {
  selectedMovie: {
    data: SearchedMovie | null,
    loading: Loading,
  }
}

const initialState: MovieState = {
  selectedMovie: {
    data: null,
    loading: "default",
  }
}

export const movieReducer = createReducer(initialState, (builder) => {
  builder.addCase(getMovieByTitle.fulfilled, (state, action) => ({
    ...state,
    selectedMovie: {
      data: action.payload,
      loading: "fulfilled",
    },
  }))

  builder.addCase(getMovieByTitle.pending, (state) => ({
    ...state,
    selectedMovie: {
      ...state.selectedMovie,
      loading: "pending"
    }
  }))

  builder.addCase(getMovieByTitle.rejected, (state) => ({
    ...state,
    selectedMovie: {
      ...state.selectedMovie,
      loading: "rejected"
    }
  }))
})