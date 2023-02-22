import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@ui5/webcomponents-react'
import Header from '..'

describe('Header', () => {
  it('should render component', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    )

    expect(screen.getByTestId('header'))
      .toBeInTheDocument()
  })
})