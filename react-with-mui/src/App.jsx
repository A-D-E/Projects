import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Header from './components/Header'

export default function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="xl">
        <Typography component="p">
          Hallo
        </Typography>
      </Container>
    </>
  )
}
