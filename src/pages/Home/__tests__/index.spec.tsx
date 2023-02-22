import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@ui5/webcomponents-react'
import { store } from 'app/store'
import { Provider } from 'react-redux'
import Home from '..'

describe('Home', () => {
  it('should render home', async () => {
    render(
      <ThemeProvider>
        <Provider store={store}>
          <Home />
        </Provider>
      </ThemeProvider>
    )

    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
    expect(screen.getByTestId('main-section')).toBeInTheDocument()
  })
})