import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import "../styles/ProjectsSection.css"
import { motion } from "framer-motion"; // Import motion for animations
import "../styles/Global.css"

const projects = [
  {
    title: "Melengo",
    description: "Develop new ideas, launch faster, and scale your best products with an end-to-end manufacturing platform.",
    image: "./portfolio.png", // Update with actual images
    liveLink: "https://example.com",
    githubLink: "https://github.com/example",
    tags: ["Development", "CMS"],
  },
  {
    title: "Loan Prediction Model",
    description: "A machine learning project that predicts loan approvals using Neural Networks and Logistic Regression.",
    image: "/images/loan-model.png",
    githubLink: "https://github.com/example",
    tags: ["AI", "Finance", "Data Science"],
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