import React from "react";
import { Box } from "@mui/material";
import "./App.css";
import Content from "./Component/Content/content";
import Navbar from "./Component/Navbar/navbar";
function App() {
  return (
    <Box>
      <Navbar />
      <Content />
    </Box>
  );
}

export default App;
