import { Text, Title } from "@ui5/webcomponents-react"
import style from "./ApplicationTitle.module.scss"
const ApplicationTitle = () => {
  return (
    <header
      className={style.Wrapper}
    >
      <Title>{"NTTflix"}</Title>
      <Text>{"Search your favorite movie on OMDB!"}</Text>
    </header>
  )
}

export default ApplicationTitle
