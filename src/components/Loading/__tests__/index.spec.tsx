import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "@ui5/webcomponents-react"
import Loading from ".."

describe('Loading', () => {
  it('should render component', () => {
    render(
      <ThemeProvider>
        <Loading />
      </ThemeProvider>
    )

    expect(screen.getByTestId("loading-fallback"))
      .toBeInTheDocument()
  })
})