import ApplicationTitle from "components/ApplicationTitle"
import SearchMovie from "./SearchMovie"
import Movie from "./Movie"
import style from './Main.module.scss'

const Main: React.FC = () => (
  <main
    className={style.Wrapper}
  >
    <ApplicationTitle />
    <SearchMovie />
    <Movie />
  </main>
)

export default Main
