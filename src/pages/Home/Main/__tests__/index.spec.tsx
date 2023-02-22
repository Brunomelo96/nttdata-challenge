import { fireEvent, render, screen, act } from '@testing-library/react'
import { ThemeProvider } from '@ui5/webcomponents-react'
import { store } from 'app/store'
import emptyMovieData from 'data/emptyMovieData'
import movieData from 'data/movieData'
import mockFetch from 'jest-fetch-mock'
import { Provider } from 'react-redux'
import Main from '..'

const moviesFactory = async (empty=false) => {
  mockFetch.mockResponse(req => {
    if (req.url.includes('omdbapi') && req.url.includes('&t=')) {
      return Promise.resolve(JSON.stringify(
        empty
          ? emptyMovieData
          : movieData
      ))
    }

    return Promise.reject(new Error('not mapped url'))
  })

  render(
    <ThemeProvider>
      <Provider store={store}>
        <Main />
      </Provider>
    </ThemeProvider>
  )
}

describe('Main', () => {
  beforeEach(() => {
    mockFetch.enableMocks()
    mockFetch.resetMocks()
  })

  it('should render main', async () => {
    await moviesFactory()

    expect(screen.getByText('NTTflix')).toBeInTheDocument()
    expect(screen.getByTestId('search-input')).toBeInTheDocument()
    expect(screen.getByTestId('default-fallback')).toBeInTheDocument()
  })

  it('should display selected movie on button click', async () => {
    moviesFactory()

    const input = screen.getByTestId('search-input')
    fireEvent.change(input, { target: { value: 'test' } })
    const button = screen.getByText('Search')

    await act(() => button.click())
    expect(screen.getByText(movieData.Title)).toBeInTheDocument()
  })

  it('should display empty card on button click', async () => {
    moviesFactory(true)

    const input = screen.getByTestId('search-input')
    fireEvent.change(input, { target: { value: 'test' } })
    const button = screen.getByText('Search')

    await act(() => button.click())
    expect(screen.queryByText(movieData.Title)).not.toBeInTheDocument()
    expect(screen.getByTestId('empty-fallback')).toBeInTheDocument()
  })
})