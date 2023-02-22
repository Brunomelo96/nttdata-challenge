import { MovieService } from "../movie.services"
import emptyMovie from "data/emptyMovie"
import movie from "data/movie"

describe("Movie Services", () => {
  it("should return a empty movie", async () => {
    jest.spyOn(MovieService, "getMovieByTitle")
      .mockResolvedValueOnce(emptyMovie)
    
    const response = await MovieService.getMovieByTitle("")
    expect(response).toEqual(emptyMovie)
  })

  it("should return a movie", async () => {
    jest.spyOn(MovieService, "getMovieByTitle")
      .mockResolvedValueOnce(movie)
    
    const response = await MovieService.getMovieByTitle("Lord of")
    expect(response).toEqual(movie)
  })
})