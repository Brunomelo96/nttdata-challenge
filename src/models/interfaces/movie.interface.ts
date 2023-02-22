
export interface Movie {
  title: string,
  year: string,
  genre: string,
  actors: string,
  plot: string,
  poster: string,
  type: string,
  response: boolean,
  rating: number,
}

export interface MovieData {
  Title: string,
  Year: string,
  Genre: string,
  Actors: string,
  Plot: string,
  Poster: string,
  Type: string,
  Response: string,
  Error?: string,
  imdbRating: string,
}

export interface EmptyMovie {
  response: boolean,
  error: string,
}

export interface EmptyMovieData {
  Response: string,
  Error: string,
}

export type SearchedMovie = Movie | EmptyMovie 