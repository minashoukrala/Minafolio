import React from "react";
import { Box, Typography } from "@mui/material"; // Import Material UI components
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"; // Import Timeline components
import "react-vertical-timeline-component/style.min.css"; // Import Timeline styles
import WorkIcon from "@mui/icons-material/Work"; // Import work icon from Material UI
import { motion } from "framer-motion"; // Import motion for animations
import "../styles/Global.css"

// 🎯 Define all experiences in an array for easier updates
const experiences = [
  {
    title: "Freelancing", // Category title for multiple freelance roles
    duration: "Aug 2024 - Present",
    roles: [
      {
        title: "Software Engineer",
        company: "SPSD",
        description: "Developed scalable applications using modern web technologies, ensuring optimal performance and security.",
      },
      {
        title: "IT Analyst",
        company: "Zumiez",
        description: "Provided technical support, optimized IT systems, and ensured compliance with data security standards.",
      },
      {
        title: "Web Dev/Programming Instructor",
        company: "ECS",
        description: "Taught Programming and web development fundamentals, guiding students through building responsive and accessible web applications.",
      },
    ],
    icon: <WorkIcon />,
  },
  {
    title: "Software Engineer Apprenticeship",
    company: "Career Advancement Program (CAP)",
    duration: "Jun 2024 - Sep 2024",
    description: "Reinforced data structures, algorithms, and full-stack development (C#, JavaScript, React). Built real-world projects and gained cloud experience with Microsoft Azure.",
    icon: <WorkIcon />,
  },
  {
    title: "Azure Sales Specialist",
    company: "Microsoft",
    duration: "Oct 2023 - Jan 2024",
    description: "Led technical sales engagements for Azure, conducted product demos, and built solutions exceeding revenue targets.",
    icon: <WorkIcon />,
  },
  {
    title: "Solution Architect",
    company: "Dell Technologies",
    duration: "Jan 2021 - Oct 2023",
    description: "Designed and delivered cloud and security solutions, conducted technical demos, and collaborated with sales teams.",
    icon: <WorkIcon />,
  },
  {
    title: "IT Analyst",
    company: "Danone",
    duration: "Jan 2019 - Oct 2020",
    description: "Provided IT support for 1,100 employees, meeting 100% SLA targets. Led hiring for senior team members, ensuring a high-performing IT support team.",
    icon: <WorkIcon />,
  },
];

// 🎨 ExperienceSection Component
const ExperienceSection: React.FC = () => {
  return (
    <Box
      id="experience" // ID for linking from the navbar
      className="golden-background"
      sx={{
        width: "100vw", // Full width of the viewport
        minHeight: "100vh", // Ensure section takes full screen height
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "60px 20px", md: "100px 120px" }, // Responsive padding for different screen sizes
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
        sx={{ color: "text.primary", fontWeight: "bold", mb: 6, fontSize: { xs: "2rem", md: "3.5rem" } }}
        component={motion.div}
        initial={{ opacity: 0, y: -20 }} // Start hidden and move up
        whileInView={{ opacity: 1, y: 0 }} // Fade in when scrolled into view
        viewport={{ once: false }} // Allows animation to repeat on scroll
        transition={{ duration: 0.6 }}
      >
        Experience
      </Typography>

      {/* 📌 Vertical Timeline */}
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            iconStyle={{
              background: "#FAFAD2", // Gold background for the icons
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
            icon={exp.icon}
          >
            {/* 🌀 Animation for Each Experience Block */}
            <motion.div
              initial={{ opacity: 0, y: 50 }} // Starts hidden and moves up
              whileInView={{ opacity: 1, y: 0 }} // Ensures smooth scroll-in animation
              viewport={{ once: false }} // Animation resets when scrolling back up
              transition={{ duration: 0.6, delay: index * 0.15 }} // Slight delay for cascading effect
            >
              {/* 🏷️ Experience Title */}
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FAFAD2", mb: 0.5 }}>
                {exp.title}
              </Typography>

              {/* 📌 Smaller Font for Company Name */}
              {exp.company && (
                <Typography variant="body1" sx={{ fontWeight: "medium", color: "#FFD700", fontSize: "0.9rem", mb: 1 }}>
                  {exp.company}
                </Typography>
              )}

              {/* 📝 Job Description */}
              {exp.roles ? (
                <Box sx={{ textAlign: "left" }}>
                  {exp.roles.map((role, roleIndex) => (
                    <Box key={roleIndex} sx={{ mb: 2 }}>
                      <Typography variant="h6" sx={{ fontWeight: "bold", color: "#FAFAD2" }}>
                        {role.title}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: "medium", color: "#FFD700", fontSize: "0.9rem" }}>
                        {role.company}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#FAFAD2" }}>
                        {role.description}
                      </Typography>
                    </Box>
                  ))}
                  {/* 📌 Date Below Description in Centered Style */}
                  <Typography variant="body2" sx={{ fontStyle: "italic", color: "#FAFAD2", mt: 1, textAlign: "center" }}>
                    {exp.duration}
                  </Typography>
                </Box>
              ) : (
                <Box>
                  <Typography variant="body2" sx={{ color: "#FAFAD2", textAlign: "left" }}>
                    {exp.description}
                  </Typography>
                  {/* 📌 Date Below Description */}
                  <Typography variant="body2" sx={{ fontStyle: "italic", color: "#FAFAD2", mt: 1 }}>
                    {exp.duration}
                  </Typography>
                </Box>
              )}
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Box>
  );
};

export default ExperienceSection;