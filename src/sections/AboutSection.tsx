import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import "../styles/Global.css"; // Import the global styles

const AboutSection: React.FC = () => {
  return (
    <Box id="about" className="golden-background">
      {/* Title */}
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
          color: "#FAFAD2",
          fontWeight: "bold",
          fontFamily: "'Orbitron', sans-serif",
          fontSize: { xs: "2rem", md: "3.5rem" },
          mb: 3,
          textAlign: "center",
        }}
        component={motion.div}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </Typography>

      {/* Description */}
      <Typography
        variant="h6"
        sx={{
          color: "#FAFAD2",
          textAlign: "center",
          maxWidth: "800px",
          lineHeight: 1.6,
          fontSize: { xs: "1rem", md: "1.5rem" },
        }}
      >
        I am a versatile professional with a unique blend of technical expertise and strong communication skills, developed over the past five years as a pre-sales engineer and freelance software engineer. My passion lies in technology, and I thrive in roles that allow me to create, innovate, and solve problems—whether in software engineering, sales, or product management.
        At my core, my mission is simple: help people as much as I can through technology, making an impact wherever I go.
      </Typography>
    </Box>
  );
};

export default AboutSection;