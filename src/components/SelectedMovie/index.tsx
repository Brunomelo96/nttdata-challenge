import { Movie } from "@/models/interfaces/movie.interface"

interface SelectedMovieProps {
  movie: Movie
}

const SelectedMovie: React.FC<SelectedMovieProps> = ({
  movie
}) => (
  <section>
    {movie.title}
  </section>
)

export default SelectedMovie
