import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@ui5/webcomponents-react'
import Empty from '..'

describe('Empty', () => {
  it('should render component', () => {
    render(
      <ThemeProvider>
        <Empty />
      </ThemeProvider>
    )

    expect(screen.getByTestId('empty-fallback'))
      .toBeInTheDocument()
  })
})