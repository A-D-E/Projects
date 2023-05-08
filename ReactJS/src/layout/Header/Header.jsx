import ThemeContext from 'context/ThemeContext'
import { useContext } from 'react'
import styles from './Header.module.scss'

function Header() {

  const { isDarkMode, toggleTheme, autoThemeMode, setAutoThemeMode } = useContext(ThemeContext)

  return (
    <div className={styles.Header}>
      <p>Header</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <label htmlFor="auto-theme">Autho theme mode</label>
      <input type="checkbox" name="auto-theme" id="auto-theme" value={autoThemeMode} onChange={() => setAutoThemeMode(!autoThemeMode)} />
      <p>theme: {isDarkMode ? 'Dark' : 'Light'}. Auto theme mode is {autoThemeMode ? 'yes' : 'no'}</p>
    </div>
  )
}

export default Header