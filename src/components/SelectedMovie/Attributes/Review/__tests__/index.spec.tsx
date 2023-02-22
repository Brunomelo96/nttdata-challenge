import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@ui5/webcomponents-react'
import Review from '..'

describe('Review', () => {
  it('should render Review', () => {
    render(
      <ThemeProvider>
        <Review value={4} />
      </ThemeProvider>
    )

    const review = screen.getByText(/Review/i)

    expect(review).toBeInTheDocument()
  })
})