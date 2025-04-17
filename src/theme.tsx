import { createTheme } from '@mui/material/styles';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: `'Poppins', sans-serif`,
    h1: {
      fontWeight: 700,
      fontSize: '2rem',
      [`@media (min-width:600px)`]: {
        fontSize: '2.5rem',
      },
      [`@media (min-width:900px)`]: {
        fontSize: '3rem',
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.75rem',
      [`@media (min-width:600px)`]: {
        fontSize: '2.25rem',
      },
      [`@media (min-width:900px)`]: {
        fontSize: '2.75rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
      [`@media (min-width:600px)`]: {
        fontSize: '2rem',
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.25rem',
      [`@media (min-width:600px)`]: {
        fontSize: '1.75rem',
      },
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.1rem',
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      [`@media (min-width:600px)`]: {
        fontSize: '1.1rem',
      },
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
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
