import { ThemingParameters } from "@ui5/webcomponents-react-base"

interface ImageProps {
  src: string,
  title: string,
}

const Image: React.FC<ImageProps> = ({ src, title }) => (
  <img
    style={{
      borderRadius: "16px",
      boxShadow: `0px 2px 4px ${ThemingParameters.sapContent_ContrastShadowColor}`,
    }}
    src={src}
    alt={`${title} movie poster`}
  />
)

export default Image
