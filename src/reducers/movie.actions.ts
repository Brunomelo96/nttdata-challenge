import { Movie } from "@/models/interfaces/movie.interface"
import { createAction } from "@reduxjs/toolkit"

export const setSelectedMovie = createAction<Movie | null>(
  "movie/setSelectedMovie",
)
