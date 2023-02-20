import { Button, Card, Input } from "@ui5/webcomponents-react"
import style from "./SearchMovie.module.scss"

interface SearchMovieProps {
  value: string,
  onSearchClick: VoidFunction,
  onResetClick: VoidFunction,
}

const SearchMovie: React.FC<SearchMovieProps> = ({
  value,
  onSearchClick,
  onResetClick,
}) => (
  <section
    className={style.Wrapper}
  >
    <Input
      value={value}
      className={style.Input}
      placeholder="Qual filme você quer buscar?"
    />
    <Button
      className={style.Button}
      onClick={onSearchClick}
    >
      Search
    </Button>
    <Button
      className={style.Button}
      onClick={onResetClick}
    >
      Reset
    </Button>
  </section>
)

export default SearchMovie
