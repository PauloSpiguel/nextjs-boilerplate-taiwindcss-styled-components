import React from 'react'
import '../styles/tailwind.css'
import GlobalStyles from '../styles/global'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}
export default App
