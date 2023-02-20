import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from '@ui5/webcomponents-react'
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme'
import '@ui5/webcomponents-react/dist/Assets'

setTheme("sap_fiori_dark")

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
