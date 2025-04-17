import { createTheme } from '@mui/material/styles';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

const darkTheme = createTheme({
  typography: {
    fontFamily: `'Poppins', sans-serif`,
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    body1: {
      fontWeight: 400,
    },
    button: {
      textTransform: 'none', 
    },
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1F1B24',
    },
    primary: {
      main: '#EEEEEE',
    },
    text: {
      primary: '#F5F5F5', 
      secondary: '#B0B0B0',
    },
  },
});

export default darkTheme;
