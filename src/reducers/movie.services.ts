import { SearchedMovie } from "@/models/interfaces/movie.interface"
import { MOVIE_API_URL } from "@/constants/env"
import GetByTitle from "@/mappers/GetByTitle"

const getBySearch = async (data: string): Promise<SearchedMovie> => 
  await fetch(`${MOVIE_API_URL}&t=${data}`)
    .then((resolve) => resolve.json())
    .then((resolve) => GetByTitle(resolve))

export const MovieService = {
  getBySearch,
}