// import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import List from "../../SharedUI/List/list";
import Card from "../Card/card";
import Experience from "../../SharedUI/Experience/experience";
import About from "../../SharedUI/Aboutme/aboutme";
import { Chip, Paper } from '@mui/material';
import Footer from "../../SharedUI/Footer/footer";
import { MotionWrapper } from "../../SharedUI/Animation/animation";
import CardAnimation from "../../SharedUI/Animation/cardanimation";

  const WorkProjects = [
    {
      title: "To-Do List",
      description: `TO DO LIST built with HTML, CSS, and React.js.
  - Add, delete, and mark tasks as completed ✅
  - Interactive UI with real-time task updates
  - Component-based structure for clean and maintainable code`,
      image: "https://images.pexels.com/photos/1750268/pexels-photo-1750268.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://github.com/Simra2004/todolist-react"
      
    },
    {
      title: "Google Homepage Clone",
      description: `A clean and responsive replica of the Google homepage built using React, Vite, and CSS.
  - Mimics original layout and styling
  - Fully responsive design
  - Practiced component-based architecture`,
      image: "https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=800",
 link: "https://github.com/Simra2004/Google-homepage-using-react"
    },
    {
      title: "Tic-Tac-Toe Game",
      description: `A classic Tic-Tac-Toe game built with React.js.
  - Two-player mode with alternating turns
  - Win/draw detection and game reset
  - Styled using CSS for a smooth UI`,
  image: "https://images.pexels.com/photos/28454507/pexels-photo-28454507/free-photo-of-tic-tac-toe-game-on-black-surface.jpeg?auto=compress&cs=tinysrgb&w=800",
 link: "https://github.com/Simra2004/TicTacToe-react"
    },
    {
      title: "Expense Tracker",
    description: `An intuitive Expense Tracker built using React.js.
- Add, view, and categorize expenses 💸
- Visual summary of total balance, income, and expenses
- State managed using React hooks`,
image: "https://images.pexels.com/photos/16282306/pexels-photo-16282306/free-photo-of-a-person-using-a-calculator.jpeg?auto=compress&cs=tinysrgb&w=800",
 link: "https://github.com/Simra2004/expense-tracker"
},
    {
      title: "Book Genre Prediction",
      description: `A machine learning project that predicts book genres based on textual data.
  - Utilized Python with scikit-learn and pandas
  - Implemented models like Naive Bayes and Logistic Regression
  - Achieved accurate predictions with proper preprocessing and EDA`,
  image: "https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=800",
   link: "https://github.com/Simra2004/BOOK-GENRE-PREDICTION"
    },
    {
      title: "Movie Recommendation System",
      description: `A content-based movie recommendation system using Python.
    - Utilized TF-IDF Vectorizer to compute content similarity 🎬
    - Recommends movies based on plot and genre
    - Implemented using pandas, scikit-learn, and streamlit for UI`,
    image: "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=800",
     link: "https://github.com/Simra2004/movie-recommendation-system"
  },
    {
      title: "Laboratory Automation System",
      description: `A web-based lab management system built with Python and Streamlit.
    - Handles patient data, test entries, and result generation
    - User-friendly UI to automate lab operations efficiently 🧪
    - Utilized pandas for data handling and Streamlit for interactive UI`,
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800",
       link: "https://github.com/Hania-k11/LaboratorySystem"
    },
    {
      title: "E-commerce Website UI",
      description: `A responsive front-end e-commerce website built using HTML, CSS, Bootstrap, and JavaScript.
    - Features home, product, blog, and cart pages 🛒
    - Fully responsive layout with Bootstrap grid
    - Dynamic interactions using JavaScript (e.g., add to cart, toggle menu)`,
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
     link: "https://github.com/Simra2004/E-commerce-website-using-html-css-bootstrap-and-javascript"
  }
    
  ];
  
function Content() {
  return (
    <Container className="content">
      <MotionWrapper>
      <div id="Introduction">
        <Typography
          marginRight={70}
          marginTop={5}
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
            marginTop: 1,
          }}
        >
          <Typography
            color="white"
            marginRight={20}
            fontWeight={600}
            fontSize={20}
            variant="h5"
            className="description"
          >
            👋 Hi, I’m Simra Faisal I'm a passionate Software Developer
            currently pursuing a Bachelor's in Computer and information Science.
            I have hands-on experience with both frontend and backend
            technologies through various academic and professional projects. My
            strengths lie in building responsive, performance-optimized websites
            using modern stacks like React and JavaScript. I enjoy solving
            real-world problems through clean code, and I thrive in environments
            where creativity, collaboration, and precision are key.
          </Typography>

          <img
            src="https://static.vecteezy.com/system/resources/previews/016/746/979/non_2x/freelancer-software-developer-programmer-coder-illustrator-vector.jpg"
            alt="Freelancer Illustration"
            style={{
              width: "400px",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0px 4px 20px rgba(0,0,0,0.5)",
            }}
          />
        </Box>
        <div
          className="buttons"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: -8,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            href="#contact"
            id="Contactme"
            sx={{ mr: 2, ml: 17, padding: 2 }}
          >
            {" "}
            CONTACT ME
          </Button>
          <Button
            variant="contained"
            color="secondary"
            href="https://app.enhancv.com/share/bce078f2/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
            target="_blank"
            sx={{ padding: 1 }}
          >
            {" "}
            DOWNLOAD RESUME
          </Button>
        </div>
      </div>
      </MotionWrapper>
      <MotionWrapper>
<CardAnimation>
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
            flexWrap:"wrap",
            marginTop: 2,
            marginBottom: 5,
          }}
        >
{WorkProjects.map((project, index) => (
  <Card
    key={index}
    title={project.title}
    description={project.description}
    link= {project.link}
    image= {project.image}
  />
))}
        </Box>
      </div></CardAnimation>
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
      </MotionWrapper>
      <MotionWrapper>
      <div id="Experience">
        <Typography
          variant="h4"
          className="title"
          marginTop={5}
          marginBottom={5}
          fontWeight={"bold"}
        >
          EXPERIENCE
        </Typography>
        <Typography
          variant="h6"
          className="description"
          marginTop={2}
          fontWeight={600}
          
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 2,
              fontWeight: 600,
              
            }}
          >
            <Experience />
            
          </Box>
        </Typography>
       
       <MotionWrapper>
        <div id="Skills">
  <Typography
    variant="h4"
    className="title"
    marginTop={6}
    marginBottom={3}
    fontWeight="bold"
  >
    SKILLS
  </Typography>
  <Paper
  sx={{
    padding: 3,
    backgroundColor: "transparent",  
    borderRadius: 3,
    maxWidth: 800,
    margin: "0 auto",
  }}
>
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      gap: 2,
      justifyContent: "center",
      backgroundColor: "transparent", 
    }}
  >
    {[ 
      "OOPs", "Data Structures", "HTML", "CSS", "JavaScript", "React", "Vite", 
      "Python", "Machine Learning Algorithms", "Git / GitHub", "Website SEO", 
      "State Management"
    ].map((skill, index) => (
      <Chip
        key={index}
        label={skill}
        sx={{
          fontWeight: "bold",
          fontSize: "0.9rem",
          backgroundColor: "#d78edf",
          color: "black",
          borderRadius: "8px",
          padding: "6px 12px",
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
            backgroundColor: "#c77ad4", 
          },
        }}
      />
    ))}
  </Box>
</Paper>

</div></MotionWrapper>
      </div></MotionWrapper>
      <MotionWrapper>
      <div id="Education">
        <Typography
          variant="h4"
          className="title"
          marginTop={6}
          marginBottom={6}
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
          <Box sx={{ marginTop: 3, marginLeft: 10 }}>
            <List />
          </Box>
        </Typography>
      </div>
      </MotionWrapper>
      <MotionWrapper>
      <div id="Contactme">
        <Typography
          variant="h4"
          className="title"
          marginTop={10}
          marginBottom={5}
          fontWeight={"bold"}
        >
          CONTACT ME
        </Typography>
        <Typography
          variant="h6"
          className="description"
          marginTop={2}
          fontWeight={600}
        >
          <About />
          
        </Typography>
      
      </div>
      </MotionWrapper>
      <CardAnimation>
      <Footer/>
      </CardAnimation>
    </Container>
  );
}
export default Content;
