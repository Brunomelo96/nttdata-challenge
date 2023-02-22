import { Movie, MovieData, EmptyMovie } from "models/interfaces/movie.interface";

export default (data: MovieData,): Movie | EmptyMovie => {

  if (data?.Response === "False") {
    return ({
      response: false,
      error: data.Error,
    }) as EmptyMovie
  }

  return ({
    title: data.Title,
    year:  data.Year,
    genre:  data.Genre,
    actors:  data.Actors,
    plot:  data.Plot,
    poster:  data.Poster,
    type:  data.Type,
    response: true,
    rating: Number(data.imdbRating),
  }) as Movie
}
