import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212', 
      paper: '#1F1B24',     
    },
    primary: {
      main: '#BB86FC',     
    },
    text: {
      primary: '#E0E0E0',  
    },
  },
});

export default darkTheme;
