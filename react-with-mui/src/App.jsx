import { CssBaseline, Container } from '@material-ui/core'
import Header from 'components/Header'
import Hero from 'components/Hero'
import { ThemeProvider, createMuiTheme, makeStyles, responsiveFontSizes } from '@material-ui/core/styles'
import { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  AppPaper: {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',

    '& > header': {
      background: '#ffffff !important',
      color: '#333333',
    },
  },

}))

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  let theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? 'rgb(48 54 56)' : '#fff',
        paper: darkMode ? 'rgb(48 54 56)' : '#fff',
      },
      primary: {
        main: '#01879d',
        light: '#52b7ce',
        dark: '#005a6f',
        contrastText: '#fff',
      },
      info: {
        main: '#01879d',
        light: '#52b7ce',
        dark: '#005a6f',
        contrastText: '#fff',
      },
    },
    typography: {
      fontFamily: [
        'Gudea',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
      useNextVariants: true,
      htmlFontSize: 18,
    },
  })
  theme = responsiveFontSizes(theme)
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Container maxWidth="xl">
        <Hero />
      </Container>
    </ThemeProvider>
  )
}
