import { Movie } from "@/models/interfaces/movie.interface"
import { MOVIE_API_URL } from "@/constants/env"

const getBySearch = async (): Promise<Movie[]> => 
  await fetch(`${MOVIE_API_URL}`)
    .then((resolve) => resolve.json())

export {
  getBySearch,
}