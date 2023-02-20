import { Movie } from "@/models/interfaces/movie.interface"
import { MOVIE_API_URL } from "@/constants/env"

const getBySearch = async (data: string): Promise<Movie> => 
  await fetch(`${MOVIE_API_URL}&s=${data}`)
    .then((resolve) => resolve.json())

export const MovieService = {
  getBySearch,
}