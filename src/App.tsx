import { Box } from "@mui/material";
import "./App.css";
import Content from "./Component/Content/content";
import Navbar from "./SharedUI/Navbar/navbar";


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
