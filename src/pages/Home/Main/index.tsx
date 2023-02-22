import ApplicationTitle from "components/ApplicationTitle"
import SearchMovie from "./SearchMovie"
import MovieSection from "./MovieSection"
import style from './Main.module.scss'

const Main: React.FC = () => (
  <main
    data-testid='main-section'
    className={style.Wrapper}
  >
    <ApplicationTitle />
    <SearchMovie />
    <MovieSection />
  </main>
)

export default Main
