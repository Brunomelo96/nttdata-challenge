import { Movie } from 'models/interfaces/movie.interface'
import { Text } from '@ui5/webcomponents-react'
import style from './Attributes.module.scss'
import Review from './Review'

type AttributeProps = Pick<Movie, 'actors' | 'rating'>

const Attributes: React.FC<AttributeProps> = ({
  actors,
  rating
}) => {

  return (
    <div
      className={style.Wrapper}
    >
      <Text>
        <>
          <strong>Actors: </strong>
          {actors}
        </>
      </Text>
      <Review value={rating} />
    </div>
  )
}

export default Attributes