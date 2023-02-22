import { getMovieByTitle } from "../movie.actions"
import { movieReducer } from "../movie.reducer"
import movie from "data/movie"
import emptyMovie from "data/emptyMovie"

describe("Movie Reducer", () => {
  it("should return the initial state", () => {
    expect(movieReducer(undefined, { type: undefined }))
      .toEqual({
          data: null,
          loading: "default"
      })
  })

  it(
    "should change loading to pending on action pending",
    () => {
      const action = { type: getMovieByTitle.pending }
      const state = movieReducer(undefined, action)
      expect(state).toEqual(
        expect.objectContaining({
          loading: "pending",
          data: null,
        })
      )
    }
  )

  it(
    "should change loading to rejected on action rejected",
    () => {
      const action = { type: getMovieByTitle.rejected }
      const state = movieReducer(undefined, action)
      expect(state).toEqual(
        expect.objectContaining({
          loading: "rejected",
          data: null,
        })
      )
    }
  )

  it("should change movie to empty movie on action fulfilled", () => {
    const action = {
      type: getMovieByTitle.fulfilled,
      payload: emptyMovie,
    }
    const state = movieReducer(undefined, action)
      expect(state).toEqual(
        expect.objectContaining({
          loading: "fulfilled",
          data: emptyMovie,
        })
      )
  })

  it("should change movie on action fulfilled", () => {
    const action = {
      type: getMovieByTitle.fulfilled,
      payload: movie
    }
    const state = movieReducer(undefined, action)
      expect(state).toEqual(
        expect.objectContaining({
          loading: "fulfilled",
          data: movie,
        })
      )
  })
})