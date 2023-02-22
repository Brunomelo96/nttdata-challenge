import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@ui5/webcomponents-react'
import ApplicationTitle from '..'

describe('ApplicationTitle', () => {
  it('should render application title', () => {
    render(
      <ThemeProvider>
        <ApplicationTitle />
      </ThemeProvider>
    )

    expect(screen.getByText('NTTflix')).toBeInTheDocument()
  })
})