import { IllustratedMessage } from "@ui5/webcomponents-react"
import "@ui5/webcomponents-fiori/dist/illustrations/ErrorScreen.js"

const Error = () => (
  <IllustratedMessage
    data-testid='error-fallback'
    titleText="Sorry, we can't search for your movie"
    subtitleText="Please, try again later!"
    name="ErrorScreen"
  />
)

export default Error
