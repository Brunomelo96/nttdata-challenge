import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@ui5/webcomponents-react'
import movie from 'data/movie'
import Image from '..'

describe('Image', () => {
  it('should render Image', () => {
    render(
      <ThemeProvider>
        <Image src={movie.poster} title={movie.title} />
      </ThemeProvider>
    )

    const image = screen.getByAltText(`${movie.title} movie poster`)

    expect(image).toBeInTheDocument()
  })
})