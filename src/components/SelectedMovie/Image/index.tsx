import { ThemingParameters } from "@ui5/webcomponents-react-base"

interface ImageProps {
  src: string,
}

const Image: React.FC<ImageProps> = ({ src }) => (
  <img
    style={{
      borderRadius: "16px",
      boxShadow: `0px 2px 4px ${ThemingParameters.sapContent_ContrastShadowColor}`,
    }}
    src={src}
  />
)

export default Image
