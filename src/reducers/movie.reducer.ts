import { createReducer } from "@reduxjs/toolkit"
import { SearchedMovie } from "@/models/interfaces/movie.interface";
import { getMovieByTitle } from "./movie.actions";

type Loading = "default" | "pending" | "fulfilled" | "rejected"

interface MovieState {
  data: SearchedMovie | null,
  loading: Loading,
}

const initialState: MovieState = {
  data: null,
  loading: "default",
}

export const movieReducer = createReducer(initialState, (builder) => {
  builder.addCase(getMovieByTitle.fulfilled, (state, action) => ({
    ...state,
    data: action.payload,
    loading: "fulfilled",
  }))

  builder.addCase(getMovieByTitle.pending, (state) => ({
    ...state,
    loading: "pending"
  }))

  builder.addCase(getMovieByTitle.rejected, (state) => ({
    ...state,
    loading: "rejected"
  }))
})