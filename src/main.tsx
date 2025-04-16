// src/main.tsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import darkTheme from './theme';

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
