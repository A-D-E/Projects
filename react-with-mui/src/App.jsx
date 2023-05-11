import { CssBaseline, Typography, Container } from '@material-ui/core'
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
