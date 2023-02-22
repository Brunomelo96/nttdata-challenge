import { IllustratedMessage } from "@ui5/webcomponents-react"
import "@ui5/webcomponents-fiori/dist/illustrations/EmptyList.js"

const Empty = () => (
  <IllustratedMessage
    data-testid='empty-fallback'
    name="EmptyList"
    titleText="We did'nt found your movie"
    subtitleText="Perhaps the movie title was typed wrong"
  />
)
export default Empty
