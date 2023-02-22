import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "@ui5/webcomponents-react"
import Default from ".."

describe('Default', () => {
  it('should render component', () => {
    render(
      <ThemeProvider>
        <Default />
      </ThemeProvider>
    )

    expect(screen.getByTestId("default-fallback"))
      .toBeInTheDocument()
  })
})