import { Loader } from "@ui5/webcomponents-react"

const Loading = () => (
  <Loader
    data-testid='loading-fallback'
    type="Indeterminate"
  />
)

export default Loading
