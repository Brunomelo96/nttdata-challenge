import ApplicationTitle from "@/components/ApplicationTitle"
import style from './Main.module.scss'
const Main: React.FC = () => {

  return (
    <main
      className={style.Wrapper}
    >
      <ApplicationTitle />
      <div>search</div>
      <div>movie</div>
    </main>
  )
}

export default Main
