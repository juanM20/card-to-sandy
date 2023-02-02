import './Header.css';
import { Container, Button, createTheme, ThemeProvider } from '@mui/material';
import headerImage from '../../images/header-image.png';

const theme = createTheme({
  palette: {
    primary: {
      light: '#c18adb',
      main: '#eb2f9b',
      dark: '#7408a6',
      contrastText: '#fff',
    }
  }
})

const Header = () => {
  return (
    <header>
      <Container maxWidth="lg">
        <div className='header-section'>
          <div>
            <h1 className='title'>Dear Sandy</h1>
            <div className='subtitle'>
              <span className=''>Presento ante ti una muestra de mi cariño.</span>
            </div>
          </div>
          <div>
            <img className='header-image' src={headerImage} alt='headerImage'></img>
          </div>
        </div>
      </Container>
      <ThemeProvider theme={theme}>
        <Button variant="contained" size='large'>Continuar</Button>
      </ThemeProvider>
    </header>
  )
}

export default Header;