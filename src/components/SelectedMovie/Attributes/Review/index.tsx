import { RatingIndicator, Text } from "@ui5/webcomponents-react"
import style from "./Review.module.scss"

interface ReviewProps {
  value: number,
}

const Review: React.FC<ReviewProps> = ({
  value
}) => (
  <div
    className={style.Wrapper}
  >
    <Text><strong>Review: </strong></Text>
    <RatingIndicator
      disabled
      max={5}
      value={value/2}
    />
  </div>
)

export default Review