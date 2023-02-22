import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@ui5/webcomponents-react'
import movie from 'data/movie'
import SelectedMovie from '..'

describe('SelectedMovie', () => {
  it('should render SelectedMovie', () => {
    render(
      <ThemeProvider>
        <SelectedMovie
          movie={movie}
        />
      </ThemeProvider>
    )

    const header = screen.getByText(movie.title)
    const attributes = screen.getByText('Actors:')
    const image = screen.getByAltText(`${movie.title} movie poster`)
    const button = screen.getByRole('button')

    expect(header).toBeInTheDocument()
    expect(attributes).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
})