import React from "react";
import { AppBar, Toolbar, Typography, Button,Box,Card } from "@mui/material";
import "./Navbar.css";

function Navbar() {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6" className="nav-title">
          Simra's Portfolio
        </Typography>   
        <Box sx={{display:"flex", justifyContent:"space-between"}}>
          <Button sx={ {marginLeft:70, color:"inherit"}}>Work</Button>
          <Button color="inherit">Education</Button>
          <Button color="inherit">Experience</Button>
          <Button color="inherit">Projects</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
