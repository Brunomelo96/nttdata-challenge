import { Movie } from "models/interfaces/movie.interface"
import { Text, Title } from "@ui5/webcomponents-react"
import style from "./Header.module.scss"

type HeaderProps = Pick<Movie, 'title' | 'plot'>

const Header: React.FC<HeaderProps> = ({
  title,
  plot
}) => (
  <header
    className={style.Wrapper}
  >
    <Title
      level="H3"
      title={title}
    >
      {title}
    </Title>
    <Text>{plot}</Text>
  </header>
)

export default Header
