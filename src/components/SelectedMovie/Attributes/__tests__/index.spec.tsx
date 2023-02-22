import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@ui5/webcomponents-react'
import movie from 'data/movie'
import Attributes from '..'

describe('Attributes', () => {
  it('should render Attributes', () => {
    render(
      <ThemeProvider>
        <Attributes
          actors={movie.actors}
          rating={4}
        />
      </ThemeProvider>
    )

    const actors = screen.getByText(movie.actors)
    const review = screen.getByText(/Review/i)

    expect(actors).toBeInTheDocument()
    expect(review).toBeInTheDocument()
  })
})