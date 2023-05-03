import { createContext, useEffect, useState } from "react"
import { theme } from "theme"

const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => { },
  currentTheme: theme.light
})

export const ThemeContextProvider = ({ children }) => {

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  )
  const [currentTheme, setCurrentTheme] = useState(theme.light)

  useEffect(() => {
    const htmlElement = document.querySelector('html')
    if (isDarkMode) {
      htmlElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
      setCurrentTheme(theme.dark)
    } else {
      htmlElement.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
      setCurrentTheme(theme.light)
    }

  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }


  return (
    <ThemeContext.Provider value={{
      isDarkMode,
      toggleTheme,
      currentTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )

}

export default ThemeContext