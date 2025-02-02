
import { Box, Typography, Stack } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import "../styles/ProjectsSection.css"
import { motion } from "framer-motion"; // Import motion for animations
import "../styles/Global.css"

const projects = [
  {
    title: "Minafolio",
    description: "A Next.js & TypeScript portfolio showcasing projects, experience, and skills. Built with React, Material UI, and Framer Motion for a sleek UI, smooth animations, and full responsiveness. Features a modern design, interactive components, and a well-structured layout.",
    image: "./portfolio.png", // Update with actual images
    liveLink: "https://minashoukrala.github.io/minafolio/",
    githubLink: "https://github.com/minashoukrala/minafolio",
    tags: ["Web-Developer", "React", "Typescript"],
  },
  {
    title: "Loan Prediction Model",
    description: "A machine learning model for loan approval prediction using Neural Networks and Logistic Regression. Built with Pandas, NumPy, Scikit-learn, and TensorFlow/Keras, featuring data visualization and performance evaluation.",
    image: "./loanproject.png",
    githubLink: "https://github.com/minashoukrala/Loan-Prediction-Model",
    tags: ["ML", "Data Science", "Python", "Neural-Networks", "Data-Visualization"],
  },
  {
    title: "Bookstore Website",
    description: "A full-stack e-commerce platform for managing books, orders, and payments. Built with a Django backend, React frontend, and Azure SQL database, it supports user authentication, product management, shopping cart functionality, and Stripe payments. Fully responsive and secure.",
    image: "./bookstore.png",
    githubLink: "https://github.com/minashoukrala/BookstoreWebApp",
    tags: ["Full-Stack", "Django", "React", "Auth"],
  },
  {
    title: "Super Mina",
    description: "A 2D platformer inspired by Super Mario, built with C# and Unity using Object-Oriented Programming (OOP) design patterns for modularity and scalability. Features smooth player controls, enemy AI, collectibles, level progression, and dynamic physics interactions. Designed for an engaging and responsive gameplay experience.",
    image: "./supermario.jpg",
    tags: ["Unity", "C#", "OOP"],
  },
  {
    title: "GameBox",
    description: "A collection of Battleship and Tic-Tac-Toe, built with OOP principles for modularity. Features turn-based gameplay, AI opponents, grid-based logic, and an interactive experience with clean, efficient code.",
    image: "./nopic.jpg",
    githubLink: "https://github.com/minashoukrala/GameBox",
    tags: ["OOP", "JavaScript", "Python", "C#"],
  },
  {
    title: "'I Have a Dream' Analysis",
    description: "An R-based text analysis of Martin Luther King Jr.'s 'I Have a Dream' speech. Uses tidytext, ggplot2, and dplyr for sentiment analysis, word frequency, and linguistic insights. Includes data visualizations to highlight key themes and rhetorical patterns.",
    image: "./speechanalysis.jpg",
    githubLink: "https://github.com/minashoukrala/I_have_a_dream-Analysis",
    tags: ["R", "NLP", "Data-Visualization"],
  },
];

const Projects = () => {
  return (
    <Box id="projects" className="golden-background" sx={{ minHeight: "100vh", padding: "60px 20px", textAlign: "center"}}>
      <div className="golden-stars">
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span>
      </div>
      <Typography
        variant="h2"
        sx={{
          color: "text.primary",
          fontWeight: "bold",
          fontFamily: "'Orbitron', sans-serif", // Match portfolio font
          fontSize: { xs: "2rem", md: "3.5rem" }, // Responsive font sizes
          mb: 6,
        }}
        component={motion.div}
        initial={{ opacity: 0, y: -20 }} // Start hidden and move up
        whileInView={{ opacity: 1, y: 0 }} // Fade in when scrolled into view
        viewport={{ once: false }} // Allows animation to repeat on scroll
        transition={{ duration: 0.6 }}
      >
        Projects
      </Typography>

      <Stack spacing={4} alignItems="center">
      {projects.map((project, index) => (
        <ProjectCard key={index} index={index} {...project} />
      ))}
      </Stack>
    </Box>
  );
};

export default Projects;