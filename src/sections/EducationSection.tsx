import React from "react";
import { Box, Typography } from "@mui/material"; // Import Material UI components
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"; // Import Timeline components
import "react-vertical-timeline-component/style.min.css"; // Import Timeline styles
import SchoolIcon from "@mui/icons-material/School"; // Education icon from Material UI
import { motion } from "framer-motion"; // Import motion for animations
import "../styles/Global.css"

// 🎓 Education Data (Updated)
const education = [
  {
    degree: "Master’s Degree in Computer Science",
    university: "University of Colorado Boulder",
    duration: "Jan 2025 - Present",
    description: "Focused on advanced algorithms and software engineering research.",
    icon: <SchoolIcon />,
  },
  {
    degree: "Bachelor’s Degree in Computer Science",
    university: "Ain Shams University",
    duration: "Sep 2015 - Jun 2019",
    description: "Ranked in the top 10% of the class. Specialized in software development, algorithms, and database systems.",
    icon: <SchoolIcon />,
  },
];

const EducationSection: React.FC = () => {
  return (
    <Box
      id="education" // ID for navigation linking
      className="golden-background"
      sx={{
        width: "100vw", // Full width of the viewport
        minHeight: "100vh", // Ensure section takes full screen height
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "60px 20px", md: "100px 120px" }, // Responsive padding
        textAlign: "center",
      }}
    >
      <div className="golden-stars">
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span>
      </div>
      {/* 🔥 Section Title with Animation */}
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
        Education
      </Typography>

      {/* 📌 Vertical Timeline */}
      <VerticalTimeline>
        {education.map((edu, index) => (
          <VerticalTimelineElement
            key={index}
            iconStyle={{
              background: "#FAFAD2", // Gold background for icons
              color: "#1C1C1C", // Dark icon for contrast
              boxShadow: "0px 0px 10px rgba(255, 215, 0, 0.5)", // Soft glowing effect
            }}
            contentStyle={{
              background: "#1C1C1C", // Dark background for contrast
              color: "#FAFAD2", // Gold text for readability
              boxShadow: "0px 5px 15px rgba(0,0,0,0.3)", // Subtle shadow for depth
              borderRadius: "10px", // Rounded corners
              padding: "20px", // Padding inside the box
            }}
            contentArrowStyle={{ borderRight: "7px solid #FAFAD2" }} // Arrow pointing to timeline
            icon={edu.icon}
          >
            {/* 🌀 Animation for Each Education Block */}
            <motion.div
              initial={{ opacity: 0, y: 50 }} // Starts hidden and moves up
              whileInView={{ opacity: 1, y: 0 }} // Ensures smooth scroll-in animation
              viewport={{ once: false }} // Animation resets when scrolling back up
              transition={{ duration: 0.6, delay: index * 0.15 }} // Slight delay for cascading effect
            >
              {/* 🎓 Degree Title */}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#FAFAD2",
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: { xs: "1.3rem", md: "1.8rem" }, // Responsive font sizes
                  mb: 0.5,
                }}
              >
                {edu.degree}
              </Typography>

              {/* 🏛️ University Name (Smaller Font, Below Degree) */}
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "500",
                  color: "#FFD700", // Gold color for contrast
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  mb: 1,
                }}
              >
                {edu.university}
              </Typography>

              {/* 📖 Education Description */}
              <Typography
                variant="body2"
                sx={{
                  color: "#FAFAD2",
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: { xs: "0.9rem", md: "1.1rem" },
                  textAlign: "left",
                  mb: 1,
                }}
              >
                {edu.description}
              </Typography>

              {/* 📅 Date Below Description on the Left */}
              <Typography
                variant="body2"
                sx={{
                  fontStyle: "italic",
                  color: "#FAFAD2",
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: { xs: "0.8rem", md: "1rem" },
                }}
              >
                {edu.duration}
              </Typography>
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Box>
  );
};

export default EducationSection;