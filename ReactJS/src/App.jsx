import './App.scss'
import Header from 'layout/Header'
import Content from 'layout/Content'
import Footer from 'layout/Footer'
import ThemeContext from 'context/ThemeContext'
import { useContext, useEffect } from 'react'

function App() {

  const { currentTheme, isDarkMode, toggleTheme } = useContext(ThemeContext)

  const appStlye = {
    backgroundColor: currentTheme.primary,
    color: currentTheme.color
  }



  useEffect(() => {

    if (time >= 19 || time <= 6) {
      document.querySelector('html').setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
      if (!isDarkMode) toggleTheme()
    } else {
      document.querySelector('html').setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
      if (isDarkMode) toggleTheme()
    }

  }, [isDarkMode, time])

  return (

    <div className="App" style={appStlye}>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
