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

  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentTheme, setCurrentTheme] = useState(theme.light)
  const [autoThemeMode, setAutoThemeMode] = useState(false)
  const [isEvening, setIsEvening] = useState(false)

  useEffect(() => {

    time >= 18 || time <= 6 ? setIsEvening(true) : setIsEvening(false)

    isDarkMode ? setCurrentTheme(theme.dark) : setCurrentTheme(theme.light)

    isEvening && autoThemeMode ? setCurrentTheme(theme.dark) : setCurrentTheme(theme.light)

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