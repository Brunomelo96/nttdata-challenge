import { Movie } from "models/interfaces/movie.interface"
import Favorite from "./Favorite"
import Header from "./Header"
import Image from "./Image"
import style from "./SelectedMovie.module.scss"
import Attributes from "./Attributes"

interface SelectedMovieProps {
  movie: Movie
}

const SelectedMovie: React.FC<SelectedMovieProps> = ({
  movie
}) => {

  return (
    <section
      className={style.Wrapper}
    >
      <div
        className={style.Content}
      >
        <Header
          title={movie.title}
          plot={movie.plot}
        />
        <Attributes
          actors={movie.actors}
          rating={movie.rating}
        />

        <Favorite />
      </div>
      <Image src={movie.poster} />
    </section>
  )
}
export default SelectedMovie
