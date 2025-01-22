import React from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const avatar = "/professional_gold_illustration-removebg-preview.png"; // Replace with your actual image

const HomeSection: React.FC = () => {
  return (
    <Box
      id="home"
      sx={{
        width: "100vw",
        minHeight: "100vh",
        bgcolor: "background.default",
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // ✅ Stacks on mobile, side-by-side on larger screens
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "40px 20px", md: "80px 100px" },
        textAlign: { xs: "center", md: "left" },
        overflowX: "hidden",
      }}
    >
      {/* Social Icons Sidebar */}
      <Box
        sx={{
            position: "absolute",
            left: { xs: "10px", md: "40px" }, // ✅ Adjust left margin for small screens
            top: { xs: "auto", md: "50%" }, // ✅ Allow flexible positioning
            bottom: { xs: "20px", md: "auto" }, // ✅ Moves it below text on mobile
            transform: { md: "translateY(-50%)" }, // ✅ Centers only for desktop
            display: "flex",
            flexDirection: "column",
            gap: 2,
            zIndex: 10,
        }}
        >
        <IconButton href="https://www.linkedin.com/in/mina-shoukrala-8571a8219/" target="_blank" sx={{ color: "text.primary" }}>
          <LinkedInIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <IconButton href="https://github.com/minashoukrala" target="_blank" sx={{ color: "text.primary" }}>
          <GitHubIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>

      {/* Left Side - Text Content */}
      <Box sx={{ flex: 1, padding: { xs: "20px", md: "80px" } }}>
        <Typography
          variant="h5"
          sx={{
            bgcolor: "#FAFAD2",
            display: "inline-block",
            px: 2,
            py: 1,
            borderRadius: "8px",
            fontWeight: "bold",
            fontFamily: "'Orbitron', sans-serif",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "black",
            mb: 2,
          }}
        >
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
            mb: 1,
            fontSize: { xs: "2.5rem", md: "4rem" },
          }}
        >
          A <span style={{ color: "#FAFAD2" }}>Tech-Savvy Innovator</span>
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "text.secondary",
            maxWidth: "600px",
            mb: 3,
            lineHeight: 1.6,
            fontSize: { xs: "1rem", md: "1.2rem" },
          }}
        >
          Making lives better with technology.
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
          overflow: "hidden",
        }}
      >
        <motion.img
          src={avatar}
          alt="Mina's Avatar"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.05, y: -10 }}
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