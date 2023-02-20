import ApplicationTitle from "@/components/ApplicationTitle"
import SearchMovie from "@/components/SearchMovie"
import style from './Main.module.scss'

const Main: React.FC = () => {

  return (
    <main
      className={style.Wrapper}
    >
      <ApplicationTitle />
      <SearchMovie
        value=""
        onSearchClick={() => {}}
        onResetClick={() => {}}
      />
      <div>movie</div>
    </main>
  )
}

export default Main
