import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "@ui5/webcomponents-react"
import Footer from ".."

describe('Footer', () => {
  it('should render component', () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    )

    expect(screen.getByTestId("footer"))
      .toBeInTheDocument()
  })
})