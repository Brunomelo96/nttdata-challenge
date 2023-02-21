import { useAppSelector } from "@/app/hooks"
import Default from "@/components/Default"
import Empty from "@/components/Empty"
import Error from "@/components/Error"
import Loading from "@/components/Loading"
import SelectedMovie from "@/components/SelectedMovie"
import { Movie } from "@/models/interfaces/movie.interface"
import { selectSelectedMovie } from "@/reducers/movie.selectors"

const MovieSection = () => {
  const selectedMovie = useAppSelector(selectSelectedMovie)

  if (selectedMovie.loading === "default") {
    return (
      <Default />
    )
  }

  if (selectedMovie.loading === "pending") {
    return (
      <Loading />
    )
  }

  if (selectedMovie.loading === "rejected") {
    return (
      <Error />
    )
  }

  if (!selectedMovie.data?.response) {
    return (
      <Empty />
    )
  }

  return (
    <SelectedMovie
      movie={selectedMovie.data as Movie}
    />
  )
}

export default MovieSection