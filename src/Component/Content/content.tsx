// import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import "./Content.css";
import List from "../List/list";
import Card from "../Card/card";
import Experience from "../Experience/experience";
import About from "../Aboutme/aboutme";

function Content() {
  return (
    <Container className="content">
      <div id="Introduction">
        <Typography
          marginRight={70}
          marginTop={2}
          variant="h4"
          fontWeight={"bold"}
          className="title"
        >
          {" "}
          INTRODUCTION
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          <Typography  color="white" marginRight={20} fontWeight={600} fontSize={20} variant="h5" className="description">
          👋 Hi, I’m Simra Faisal  I'm a passionate Software Developer currently pursuing a Bachelor's in Computer  and information Science.
            I have hands-on experience with both frontend and backend technologies through various academic
            and professional projects. My strengths lie in building responsive, performance-optimized websites 
            using modern stacks like React and JavaScript.
            I enjoy solving real-world problems through clean code, and I thrive in environments where creativity,
            collaboration, and precision are key.
          </Typography>

          <img
            src="https://static.vecteezy.com/system/resources/previews/016/746/979/non_2x/freelancer-software-developer-programmer-coder-illustrator-vector.jpg"
            alt="Freelancer Illustration"
            style={{ width: "400px", height: "auto", borderRadius: "10px",boxShadow: "0px 4px 20px rgba(0,0,0,0.5)", }}
          />
        </Box>
        <div
          className="buttons"
          style={{ display: "flex", justifyContent: "flex-start",marginTop:-8 }}
        >
          <Button
            variant="contained"
            color="primary"
            href="#contact"
            id="Contactme"
            sx={{ mr:2 , ml:17, padding: 2  }}
          >
            {" "}
            CONTACT ME
          </Button>
          <Button
            variant="contained"
            color="secondary"
            href="your-resume-link.pdf"
            target="_blank"
            sx={{ padding: 1 }}
          >
            {" "}
            DOWNLOAD RESUME
          </Button>
        </div>
      </div>
      <div id="Work">
        <Typography
          marginRight={0}
          marginTop={2}
          fontWeight={"bold"}
          variant="h4"
          className="title"
        >
          {" "}
          WORK
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          <Card />
          <Card />
          <Card />
        </Box>
      </div>
      <div className="buttons">
        <Button
          variant="contained"
          color="primary"
          href="https://www.linkedin.com/in/socialmediastrategy/"
          target="_blank"
          sx={{ mr: 2, marginTop: "2" }}
        >
          LinkedIn
        </Button>
        <Button
          variant="contained"
          color="secondary"
          href="https://github.com/Simra2004"
          target="_blank"
          sx={{ mr: 2, marginTop: 2, marginBottom: 2 }}
        >
          GitHub
        </Button>
      </div>
      <div id="Experience">
        <Typography
          variant="h4"
          className="title"
          marginTop={2}
          fontWeight={"bold"}
        >
          EXPERIENCE
        </Typography>
        <Typography variant="h6" className="description" marginTop={2} fontWeight={600}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 2,
              fontWeight:600,
              
              
            }}
          >
            <Experience />
            <Experience />
            <Experience />
          </Box>
        </Typography>
      </div>
      <div id="Education">
        <Typography
          variant="h4"
          className="title"
          marginTop={2}
          marginBottom={2}
          fontWeight={"bold"}
        
        >
          EDUCATION
        </Typography>
        <Typography
          variant="h6"
          className="description"
          marginTop={2}
          marginBottom={2}
          fontWeight={600}
        >
          <Box sx={{ marginTop: 3,  marginLeft:10 }}>
            <List />
          </Box>
        </Typography>
      </div>
      {/* <section id="contact"> */}
      <div id="Contactme">
        <Typography
          variant="h4"
          className="title"
          marginTop={1}
          fontWeight={"bold"}
        >
          CONTACT ME
        </Typography>
        <Typography variant="h6" className="description" marginTop={2} fontWeight={600}>
          <About />
        </Typography>
      </div>
      {/* </section> */}
    </Container>
  );
}
export default Content;
