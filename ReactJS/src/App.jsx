import './App.scss'
import Header from 'layout/Header'
import Content from 'layout/Content'
import Footer from 'layout/Footer'
import ThemeContext from 'context/ThemeContext'
import { useContext } from 'react'

function App() {

  const { currentTheme } = useContext(ThemeContext)

  const appStlye = {
    backgroundColor: currentTheme.primary,
    color: currentTheme.color
  }


  return (

    <div className="App" style={appStlye}>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
