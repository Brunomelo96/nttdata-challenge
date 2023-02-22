import { SearchedMovie } from "models/interfaces/movie.interface"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { MovieService } from './movie.services';

export const getMovieByTitle = createAsyncThunk<SearchedMovie, string>(
  "movie/getMovieByTitle",
  MovieService.getByTitle,
)
