import { ThemeProvider } from '@ui5/webcomponents-react'
import '@ui5/webcomponents-react/dist/Assets'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from 'app/store'
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme'

setTheme("sap_horizon_dark")

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
