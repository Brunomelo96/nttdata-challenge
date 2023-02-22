import { ThemingParameters } from "@ui5/webcomponents-react-base"

const Header = () => (
  <header
    data-testid='header'
    slot="header"
    style={{
      height: '4ch',
      boxShadow: `0px 0px 10px ${ThemingParameters.sapContent_ContrastShadowColor}`,
    }}
  />
)

export default Header
