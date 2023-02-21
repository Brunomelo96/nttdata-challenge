import { useState } from "react"
import { Button } from "@ui5/webcomponents-react"
import "@ui5/webcomponents-icons/dist/heart"
import "@ui5/webcomponents-icons/dist/heart-2"

const Favorite = () => {
  const [favorite, setFavorite] = useState(false)

  return (
    <div>
      <Button
        icon={favorite ? "heart" : "heart-2"}
        iconEnd
        onClick={() => { setFavorite(!favorite) }}
      >
        Favorite
      </Button>
    </div>
  )
}

export default Favorite
