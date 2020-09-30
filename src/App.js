import React from 'react'
import { ThemeProvider } from 'styled-components'

import Home from './pages/Home'

import { darkTheme, lightTheme } from './Themes'
import { GlobalStyles } from './globalStyles'

import { useDarkMode } from './context/DarkMode'


function App() {
  const [theme] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
