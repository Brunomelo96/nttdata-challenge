import { vitest } from "vitest"
import { MovieService } from "../movie.services"
import emptyMovie from "@/data/emptyMovie"
import movie from "@/data/movie"

describe("Movie Services", () => {
  it("should return a empty movie", async () => {
    vitest.spyOn(MovieService, "getByTitle")
      .mockResolvedValueOnce(emptyMovie)
    
    const response = await MovieService.getByTitle("")
    expect(response).toEqual(emptyMovie)
  })

  it("should return a movie", async () => {
    vitest.spyOn(MovieService, "getByTitle")
      .mockResolvedValueOnce(movie)
    
    const response = await MovieService.getByTitle("Lord of")
    expect(response).toEqual(movie)
  })
})