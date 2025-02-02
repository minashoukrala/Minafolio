import React from "react";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "../styles/Global.css";

const ContactSection: React.FC = () => {
  return (
    <Box
      id="contact"
      className="golden-background"
      sx={{
        width: "100vw",
        minHeight: "100vh",
        bgcolor: "black", // Dark background
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "40px 20px", md: "80px 100px" },
        position: "relative", // Required for absolute pseudo-elements
        overflow: "hidden", // Prevents scroll due to animation
      }}
    >
      <div className="golden-stars">
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span>
      </div>
      {/* Animated Golden Particles */}
      <Box className="golden-animation"></Box>

      {/* Contact Title */}
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
        Get in Touch
      </Typography>

      {/* Contact Information */}
      <Stack spacing={3} sx={{ textAlign: "center", color: "#FAFAD2" }}>
        {/* Email */}
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
          <EmailIcon sx={{ fontSize: "1.8rem" }} />
          <Typography variant="h6">
            <a href="mailto:minamdoss@outlook.com" style={{ textDecoration: "none", color: "#FAFAD2" }}>
              minamdoss@outlook.com
            </a>
          </Typography>
        </Stack>

        {/* Phone */}
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
          <PhoneIcon sx={{ fontSize: "1.8rem" }} />
          <Typography variant="h6">+1 (425) 384-9667</Typography>
        </Stack>

        {/* Location */}
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
          <LocationOnIcon sx={{ fontSize: "1.8rem" }} />
          <Typography variant="h6">WA, USA</Typography>
        </Stack>
      </Stack>

      {/* Social Media Links */}
      <Stack direction="row" spacing={3} sx={{ mt: 4 }}>
        <IconButton href="mailto:minamdoss@outlook.com" target="_blank" sx={{ color: "#FAFAD2", fontSize: "2rem", transition: "0.3s", "&:hover": { transform: "scale(1.2)" } }}>
          <EmailIcon sx={{ fontSize: "2rem" }} />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/mina-shoukrala-8571a8219/" target="_blank" sx={{ color: "#FAFAD2", fontSize: "2rem", transition: "0.3s", "&:hover": { transform: "scale(1.2)" } }}>
          <LinkedInIcon sx={{ fontSize: "2rem" }} />
        </IconButton>
        <IconButton href="https://github.com/minashoukrala" target="_blank" sx={{ color: "#FAFAD2", fontSize: "2rem", transition: "0.3s", "&:hover": { transform: "scale(1.2)" } }}>
          <GitHubIcon sx={{ fontSize: "2rem" }} />
        </IconButton>
      </Stack>

      {/* Global Styles for Animation */}
      <style>
        {`
          @keyframes goldenGlow {
            0% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.1); }
            100% { opacity: 0.2; transform: scale(1); }
          }

          @keyframes floatingParticles {
            0% { transform: translateY(0px); opacity: 0.6; }
            50% { transform: translateY(-10px); opacity: 1; }
            100% { transform: translateY(0px); opacity: 0.6; }
          }

          .golden-animation {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
            background: radial-gradient(circle, rgba(255, 215, 0, 0.15) 10%, transparent 70%);
          }

          .golden-animation::before,
          .golden-animation::after {
            content: '';
            position: absolute;
            width: 150px;
            height: 150px;
            background: rgba(255, 215, 0, 0.2);
            border-radius: 50%;
            filter: blur(30px);
            animation: goldenGlow 5s infinite alternate ease-in-out;
          }

          .golden-animation::before {
            top: 20%;
            left: 10%;
          }

          .golden-animation::after {
            bottom: 20%;
            right: 10%;
          }

          .golden-particles {
            position: absolute;
            width: 5px;
            height: 5px;
            background: gold;
            border-radius: 50%;
            animation: floatingParticles 3s infinite alternate ease-in-out;
          }

          .golden-particles:nth-child(1) {
            top: 30%;
            left: 15%;
            animation-duration: 4s;
          }

          .golden-particles:nth-child(2) {
            top: 50%;
            right: 20%;
            animation-duration: 3.5s;
          }

          .golden-particles:nth-child(3) {
            bottom: 40%;
            left: 25%;
            animation-duration: 5s;
          }

          .golden-particles:nth-child(4) {
            bottom: 20%;
            right: 30%;
            animation-duration: 4.5s;
          }
        `}
      </style>
    </Box>
  );
};

export default ContactSection;