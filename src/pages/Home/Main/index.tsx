import { useAppDispatch } from "@/app/hooks"
import ApplicationTitle from "@/components/ApplicationTitle"
import SearchMovie from "@/components/SearchMovie"
import { getMovieByTitle } from "@/reducers/movie.actions"
import { useState } from "react"
import Movie from "./Movie"
import style from './Main.module.scss'

const Main: React.FC = () => {
  const [search, setSearch] = useState('')
  const dispatch = useAppDispatch()

  return (
    <main
      className={style.Wrapper}
    >
      <ApplicationTitle />
      <SearchMovie
        value={search}
        onSearchChange={(value?: string) => { !!value?.length && setSearch(value) }}
        onSearchClick={() => { !!search.length && dispatch(getMovieByTitle(search)) }}
        onResetClick={() => { setSearch('')}}
      />
      <section>
        <Movie />
      </section>
    </main>
  )
}

export default Main
