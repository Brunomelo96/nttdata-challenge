import { SearchedMovie } from "@/models/interfaces/movie.interface"
import { MOVIE_API_URL } from "@/constants/env"
import GetByTitle from "@/mappers/GetByTitle"

const getByTitle = async (data: string): Promise<SearchedMovie> => 
  await fetch(`${MOVIE_API_URL}&t=${data}&type=movie&plot=full`)
    .then((resolve) => resolve.json())
    .then((resolve) => GetByTitle(resolve))

export const MovieService = {
  getByTitle,
}