import { createContext, useEffect, useState } from "react"
import { theme } from "theme"

const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => { },
  currentTheme: theme.light,
  autoThemeMode: false,
  setAutoThemeMode: () => { }
})
const time = new Date().getHours()

export const ThemeContextProvider = ({ children }) => {

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  )
  const [currentTheme, setCurrentTheme] = useState(theme.light)
  const [autoThemeMode, setAutoThemeMode] = useState(false)
  const [isEvening, setIsEvening] = useState(false)

  useEffect(() => {
    const htmlElement = document.querySelector('html')

    function setThemeModeToDark() {
      htmlElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
      setCurrentTheme(theme.dark)
    }
    function setThemeModeToLight() {
      htmlElement.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
      setCurrentTheme(theme.light)
    }

    isDarkMode ? setThemeModeToDark() : setThemeModeToLight()

    isEvening && autoThemeMode && setThemeModeToDark()

  }, [isDarkMode, autoThemeMode, isEvening])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }


  return (
    <ThemeContext.Provider value={{
      isDarkMode,
      toggleTheme,
      currentTheme,
      autoThemeMode,
      setAutoThemeMode
    }}>
      {children}
    </ThemeContext.Provider>
  )

}

export default ThemeContext