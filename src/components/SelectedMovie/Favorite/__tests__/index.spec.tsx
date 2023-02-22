import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@ui5/webcomponents-react'
import Favorite from '..'

describe('Favorite', () => {
  it('should render favorite', () => {
    render(
      <ThemeProvider>
        <Favorite />
      </ThemeProvider>
    )

    const favoriteButton = screen.getByText('Favorite')
    expect(favoriteButton).toBeInTheDocument()
  })
})