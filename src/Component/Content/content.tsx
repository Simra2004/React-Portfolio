import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import "./Content.css";
import List from "../List/list";
import Card from "../Card/card";
import Experience from "../Experience/experience";

function Content() {
  return (
    <Container className="content">
      <Typography marginRight={70} variant="h4" className="title">
        {" "}
        INTRODUCTION
      </Typography>
      :
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography marginRight={20} variant="h6" className="description" >
        SIMRA FAISAL Currently enrolled in BSCS and pursuing it. Having 6 months
        of experience with semester projects on various frontend and backend
        technologies, meanwhile working at OnePercent Labs as associate software
        engineer with basic focus on javascript & react.
      </Typography>
      <img
    src="https://static.vecteezy.com/system/resources/previews/016/746/979/non_2x/freelancer-software-developer-programmer-coder-illustrator-vector.jpg"
    alt="Freelancer Illustration"
    style={{ width: '400px', height: 'auto', borderRadius: '10px' }}
  />
</Box>
<div className="buttons">
        <Button
          variant="contained"
          color="primary"
          href="simrafaisal103@gmail.com"
          target="_blank"
          sx={{ mr: 2 }}
          
        >
          CONTACT ME
        </Button>
        <Button
          variant="contained"
          color="secondary"
          href=" "
          target="_blank"
        >
         DOWNLOAD RESUME
        </Button>
      </div>:
      <Typography marginRight={0} variant="h4" className="title"  >
        {" "}
        WORK
      </Typography>
      :
      {/* <Typography variant="h6" className="description">
      </Typography> */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Card />
        <Card />
        <Card />
      </Box>:
      <div className="buttons">
        <Button
          variant="contained"
          color="primary"
          href="https://www.linkedin.com/in/socialmediastrategy/"
          target="_blank"
          sx={{ mr: 2 }}
          
        >
          LinkedIn
        </Button>
        <Button
          variant="contained"
          color="secondary"
          href="https://github.com/Simra2004"
          target="_blank"
        >
          GitHub
        </Button>
      </div>:
      <Typography variant="h4" className="title">
        EXPERIENCE
      </Typography>
      <Typography variant="h6" className="description">
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
     <Experience/>
     <Experience/>
     <Experience/>
     </Box>:
      </Typography>
      
      <Typography variant="h4" className="title">
        EDUCATION
      </Typography>
      <Typography variant="h6" className="description">
        <List />
      </Typography>
      
    </Container>
    
  );
}

export default Content;
