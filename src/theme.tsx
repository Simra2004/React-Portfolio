import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0D1117',  // Main background
      paper: '#161B22',    // For cards, sections, etc.
    },
    primary: {
      main: '#58A6FF',     // Soft blue for buttons/links
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#A1A1AA',     // Soft gray for accents
    },
    text: {
      primary: '#F5F5F5',  // 💡 Off-white text
      secondary: '#C0C0C0',
    },
    divider: '#30363D',
  },
  typography: {
    fontFamily: 'Inter, Roboto, sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 700, color: '#F5F5F5' },
    h2: { fontSize: '2rem', fontWeight: 600, color: '#F5F5F5' },
    h3: { fontSize: '1.75rem', fontWeight: 600, color: '#F5F5F5' },
    body1: { fontSize: '1rem', color: '#F5F5F5' },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#161B22',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
  },
});

export default darkTheme;
