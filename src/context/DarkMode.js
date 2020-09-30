import React, { createContext, useContext, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import changeFavicon from '../utils/changeFavicon'

const DarkModeContext = createContext(undefined)

export function DarkModeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  useEffect(() => {
    if (theme === 'light') {
      changeFavicon('🌞')
    } else {
      changeFavicon('🌙')
    }
  }, [theme])

  return (
    <DarkModeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </DarkModeContext.Provider>
  )
}

export function useDarkMode() {
  const context = useContext(DarkModeContext)
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider')
  }
  return context
}

