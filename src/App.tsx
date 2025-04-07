import React from "react";
import { Box } from "@mui/material";
import "./App.css";
import Content from "./Component/Content/content";
import Navbar from "./Component/Navbar/navbar";
import Card from "./Component/Card/card";
import List from "./Component/List/list";

function App() {
  return (
    <Box>
      <Navbar />
      <Content />
    
      {/* <List/> */}
    </Box>
  
  );
}


export default App;
