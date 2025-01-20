import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";


const avatar = "/professional_gold_illustration-removebg-preview.png"; // Replace with actual image

const HomeSection: React.FC = () => {
  return (
    <Box
      id="home"
      sx={{
        width: "100vw",
        minHeight: "100vh",
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "40px 20px", md: "80px 100px" },
        overflowX: "hidden", // Prevents overflow on this section
      }}
    >
      {/* Social Icons Sidebar */}
      <Box
        sx={{
          position: "absolute",
          left: { xs: "10px", md: "40px" },
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          overflowX: "hidden", // Prevents overflow on this section
        }}
      >
        <IconButton href="https://linkedin.com/in/minashoukrala" target="_blank" sx={{ color: "text.primary" }}>
          <LinkedInIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <IconButton href="https://github.com/minashoukrala" target="_blank" sx={{ color: "text.primary" }}>
          <GitHubIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>

      {/* Left Side - Text Content */}
    <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" }, paddingLeft: { xs: "50px", md: "80px" }, overflowX: "hidden" }}>
    <Typography 
    variant="h5" 
    sx={{ 
        bgcolor: "#FAFAD2", 
        display: "inline-block",
        px: 2, 
        py: 1, 
        borderRadius: "8px",
        fontWeight: "bold",
        fontFamily: "'Orbitron', sans-serif",  // Apply the futuristic font
        letterSpacing: "2px",  // Add spacing like the reference
        textTransform: "uppercase", // Match the reference style
        color: "black",
        mb: 2
        
    }}>
    👋 Hi There! I'm Mina Shoukrala
    </Typography>

    <Typography 
    variant="h2" 
    sx={{ 
        fontWeight: "bold", 
        color: "text.primary", 
        fontFamily: "'Orbitron', sans-serif", 
        textTransform: "uppercase", 
        letterSpacing: "3px", 
        mb: 1 
    }}>
    A <span style={{ color: "#FAFAD2" }}>Tech-Savvy Innovator</span>
    </Typography>


    </Box>

      {/* Right Side - Image */}
     
        <Box 
        sx={{
            flex: 1, 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            width: "100%",
            overflow: "hidden", // Ensures no horizontal scroll
        }}
        >
        <motion.img
            src={avatar}
            alt="Mina's Avatar"
            initial={{ opacity: 0, scale: 0.8 }} // Fades in and starts slightly smaller
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }} // Smooth fade-in & floating effect
            transition={{ duration: 1.5, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }} // Smooth looping motion
            whileHover={{ scale: 1.05, rotate: 2, y: -15 }} // Slight rotation and movement on hover
            style={{
            width: "100%",
            maxWidth: "550px",
            height: "auto",
            objectFit: "cover",
            }}
        />
        </Box>
    </Box>
  );
};

export default HomeSection;