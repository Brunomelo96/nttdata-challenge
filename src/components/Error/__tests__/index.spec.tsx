import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "@ui5/webcomponents-react"
import Error from ".."

describe('Error', () => {
  it('should render component', () => {
    render(
      <ThemeProvider>
        <Error />
      </ThemeProvider>
    )

    expect(screen.getByTestId("error-fallback"))
      .toBeInTheDocument()
  })
})