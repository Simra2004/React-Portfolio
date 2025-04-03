import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import "./Navbar.css";

function Navbar() {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6" className="nav-title">
          Simra's Portfolio
        </Typography>
        <div className="nav-links">
          <Button color="inherit">Work</Button>
          <Button color="inherit">Education</Button>
          <Button color="inherit">Experience</Button>
          <Button color="inherit">Projects</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
