import ThemeContext from 'context/ThemeContext'
import { useContext } from 'react'
import styles from './Header.module.scss'

function Header() {

  const { isDarkMode, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={styles.Header}>
      <p>Header</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>theme: {isDarkMode ? 'Dark' : 'Light'}</p>
    </div>
  )
}

export default Header