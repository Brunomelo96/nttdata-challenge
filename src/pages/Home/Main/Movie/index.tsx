import { useAppSelector } from "@/app/hooks"
import Default from "@/components/Default"
import Empty from "@/components/Empty"
import Error from "@/components/Error"
import Loading from "@/components/Loading"
import SelectedMovie from "@/components/SelectedMovie"
import { Movie } from "@/models/interfaces/movie.interface"
import { selectMovieData, selectMovieLoading } from "@/reducers/movie.selectors"

const MovieSection = () => {
  const selectedMovie = useAppSelector(selectMovieData)
  const selectedMovieLoading = useAppSelector(selectMovieLoading)

  if (selectedMovieLoading === "default") {
    return (
      <Default />
    )
  }

  if (selectedMovieLoading === "pending") {
    return (
      <Loading />
    )
  }

  if (selectedMovieLoading === "rejected") {
    return (
      <Error />
    )
  }

  if (!selectedMovie?.response) {
    return (
      <Empty />
    )
  }

  return (
    <SelectedMovie
      movie={selectedMovie as Movie}
    />
  )
}

export default MovieSection