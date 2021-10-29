import React from 'react'
import { ThemeProvider } from 'theme-ui'
// import '../src/styles.module.css'
import theme from '../theme'
import Navigation from '../src/components/Navigation'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Component {...pageProps} />{' '}
    </ThemeProvider>
  )
}

/**
 * For global CSS, you have to import them at the entry point of your app. Wait, where is the entrance to my Next.js app? It's actually created for you, but you can and have to create your own now that you want global styles.
 */
