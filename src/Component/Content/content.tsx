import React from "react";
import { Container, Typography, Button } from "@mui/material";
import "./Content.css";

function Content() {
  return (
    <Container className="content">
      <Typography variant="h3" className="title">
        {" "}
        SIMRA FAISAL
      </Typography>
      <Typography variant="h6" className="description">
        Currently enrolled in BSCS and pursuing it. Having 6 months of
        experience with semester projects on various frontend and backend
        technologies, meanwhile working at OnePercent Labs as associate software
        engineer with basic focus on javascript & react.
      </Typography>
      <Typography variant="h3" className="title">
        WORK
      </Typography>
      <Typography variant="h6" className="description">
        2022- C++ (BACKEND DEVELOPMENT WITH FILE HANDELING) 2023-JAVA+OOPS HANDS
        ON SEMESTER PROJECT ON MART MANAGEMENT SYSTEM 2024-PYTHON + Machine Learning Algorithm
        2024-2025-JAVASCRIPT + REACT JS
      </Typography>
      
      <div className="buttons">
        <Button
          variant="contained"
          color="primary"
          href="https://www.linkedin.com/in/socialmediastrategy/"
          target="_blank"
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
      </div>
    </Container>
  );
}

export default Content;
