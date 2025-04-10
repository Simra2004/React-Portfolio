import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const navItems = ['Introduction', 'Work', 'Experience', 'Education', 'Projects', 'Contact Me'];

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 10, width:'100%' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color:'black' }}>
        [Simra's Portfolio]
        </Typography>
        <Box sx={{ display: 'flex', gap: 3 }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: 'black', fontWeight: '300', textTransform: 'none', }}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

