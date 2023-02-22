import { fireEvent, render, screen } from "@testing-library/react"
import { ThemeProvider } from "@ui5/webcomponents-react"
import { store } from "app/store"
import { Provider } from "react-redux"
import SearchMovie from ".."

const mockDispatch = jest.fn();
jest.mock('app/hooks', () => ({
  useAppDispatch: () => mockDispatch
}));

describe('SearchMovie', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render search movie component', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <SearchMovie />
        </ThemeProvider>
      </Provider>
    )

    const searchInput = screen.getByTestId('search-input')
    const buttons = screen.getAllByRole('button')

    expect(searchInput).toBeInTheDocument()
    expect(buttons).toHaveLength(2)
  })

  it('should change state on input change', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <SearchMovie />
        </ThemeProvider>
      </Provider>
    )

    const input = screen.getByTestId<HTMLInputElement>('search-input')
    fireEvent.change(input, { target: { value: 'test' } })
    
    expect(input.value).toBe('test')
  })

  it('should not change state on input change if value is empty', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <SearchMovie />
        </ThemeProvider>
      </Provider>
    )

    const input = screen.getByTestId<HTMLInputElement>('search-input')
    fireEvent.change(input, { target: { value: '' } })
    
    expect(input.value).toBe('')
  })

  it('should clear state on button click', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <SearchMovie />
        </ThemeProvider>
      </Provider>
    )

    const resetButton = screen.getByText<HTMLButtonElement>('Reset')
    fireEvent.click(resetButton)

    const input = screen.getByTestId<HTMLInputElement>('search-input')
    expect(input.value).toBe('')
  })

  it('should call action on button click', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <SearchMovie />
        </ThemeProvider>
      </Provider>
    )
    const input = screen.getByTestId<HTMLInputElement>('search-input')
    fireEvent.change(input, { target: { value: 'test' } })

    const button = screen.getByText<HTMLButtonElement>('Search')
    fireEvent.click(button)

    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })

  it('should not call action on button click if value is empty', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <SearchMovie />
        </ThemeProvider>
      </Provider>
    )
    const input = screen.getByTestId<HTMLInputElement>('search-input')
    fireEvent.change(input, { target: { value: '' } })

    const button = screen.getByText<HTMLButtonElement>('Search')
    fireEvent.click(button)

    expect(mockDispatch).toHaveBeenCalledTimes(0)
  })
})