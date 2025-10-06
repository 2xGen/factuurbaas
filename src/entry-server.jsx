import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import { AppContextProvider } from './contexts/AppContext';

export function render(url) {
  const helmetContext = {}
  const appHtml = ReactDOMServer.renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <AppContextProvider>
            <App />
          </AppContextProvider>
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  )
  
  const { helmet } = helmetContext
  return { html: appHtml, head: helmet }
}