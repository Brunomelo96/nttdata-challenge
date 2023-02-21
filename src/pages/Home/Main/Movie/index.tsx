import { useAppSelector } from "@/app/hooks"
import SelectedMovie from "@/components/SelectedMovie"
import { Movie } from "@/models/interfaces/movie.interface"
import { selectSelectedMovie } from "@/reducers/movie.selectors"

const MovieSection = () => {
  const selectedMovie = useAppSelector(selectSelectedMovie)

  if (selectedMovie.loading === "default") {
    return (
      <section>
        default state
      </section>
    )
  }

  if (selectedMovie.loading === "pending") {
    return (
      <section>
        loading
      </section>
    )
  }

  if (selectedMovie.loading === "rejected") {
    return (
      <section>
        rejected
      </section>
    )
  }

  if (!selectedMovie.data?.response) {
    return (
      <section>
        empty
      </section>
    )
  }

  return (
    <SelectedMovie
      movie={selectedMovie.data as Movie}
    />
  )
}

export default MovieSection