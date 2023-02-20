import { Movie } from "@/models/interfaces/movie.interface"
import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { MovieService } from './movie.services';

export const setSelectedMovie = createAction<Movie | null>(
  "movie/setSelectedMovie",
)

export const getMovieByTitle = createAsyncThunk<Movie, string>(
  "movie/getMovieByTitle",
  MovieService.getBySearch,
)