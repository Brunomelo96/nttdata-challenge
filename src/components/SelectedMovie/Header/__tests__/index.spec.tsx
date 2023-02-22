import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@ui5/webcomponents-react'
import Header from '..'

describe('Header', () => {
  it('should render Header', () => {
    render(
      <ThemeProvider>
        <Header title='Title' plot='Plot' />
      </ThemeProvider>
    )

    const title = screen.getByText('Title')
    const plot = screen.getByText('Plot')

    expect(title).toBeInTheDocument()
    expect(plot).toBeInTheDocument()
  })
})