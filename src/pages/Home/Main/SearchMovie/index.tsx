import { Button, Input } from "@ui5/webcomponents-react"
import { useAppDispatch } from "app/hooks"
import { useState } from "react"
import { getMovieByTitle } from "reducers/movie.actions"
import style from "./SearchMovie.module.scss"

const SearchMovie = () => {
  const [search, setSearch] = useState('')
  const dispatch = useAppDispatch()

  return (
    <section
      className={style.Wrapper}
    >
      <Input
        data-testid='search-input'
        value={search}
        className={style.Input}
        placeholder="What movie are you looking for?"
        onChange={(event) => {
          event?.target?.value?.length && setSearch(event?.target?.value)
        }}
      />
      <Button
        className={style.Button}
        onClick={() => { !!search.length && dispatch(getMovieByTitle(search)) }}
        role='button'
      >
        Search
      </Button>
      <Button
        className={style.Button}
        onClick={() => { setSearch('') }}
        role='button'
      >
        Reset
      </Button>
    </section>
  )
}

export default SearchMovie
