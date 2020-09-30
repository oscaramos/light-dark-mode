import React, { createContext, useContext, useState } from 'react'

const DarkModeContext = createContext(undefined)

export function DarkModeProvider({ children }) {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <DarkModeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => {
  const context = useContext(DarkModeContext)
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider')
  }
  return context
}

