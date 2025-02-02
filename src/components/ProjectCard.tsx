import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";

interface ProjectProps {
  index: number;
  title: string;
  description: string;
  image: string;
  liveLink?: string;
  githubLink?: string;
  tags?: string[];
}

const ProjectCard: React.FC<ProjectProps> = ({ index, title, description, image, liveLink, githubLink, tags }) => {
  const isEven = index % 2 === 0;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: isEven ? "row" : "row-reverse" },
        alignItems: "flex-start", // Align content to the left
        justifyContent: "space-between",
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)",
        padding: "20px",
        gap: 2,
        width: "100%",
        maxWidth: "1100px",
        height: { xs: "auto", md: "350px" },
      }}
    >
      {/* Left Side - Project Details */}
      <Box sx={{ flex: 1, padding: "20px", textAlign: { xs: "left", md: "left" } }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#FAFAD2", mb: 1 }}>
          {title}
        </Typography>
        <Typography sx={{ color: "#ddd", fontSize: "1rem", lineHeight: 1.5, mb: 2 }}>
          {description}
        </Typography>

        {/* Tags */}
        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", mb: 2 }}>
          {tags?.map((tag, index) => (
            <Box key={index} sx={{ background: "#444", color: "#FAFAD2", padding: "5px 10px", borderRadius: "5px", fontSize: "0.9rem" }}>
              {tag}
            </Box>
          ))}
        </Stack>

        {/* Buttons */}
        <Stack direction="row" spacing={2} justifyContent={{ xs: "flex-start", md: "flex-start" }}>
          {liveLink && (
            <Button href={liveLink} target="_blank" sx={{ background: "#000", color: "#FAFAD2", "&:hover": { background: "#444" } }}>
              Live Demo
            </Button>
          )}
          {githubLink && (
            <Button href={githubLink} target="_blank" sx={{ background: "#222", color: "#FAFAD2", "&:hover": { background: "#555" } }}>
              GitHub
            </Button>
          )}
        </Stack>
      </Box>

      {/* Right Side - Project Image with Hover Animation */}
      <Box
        sx={{
          flex: 1.2,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: "250px", md: "100%" },
          minHeight: { xs: "250px", md: "100%" },
          width: "100%",
          borderRadius: "15px",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-5px) scale(1.05)",
          },
        }}
      />
    </Box>
  );
};

export default ProjectCard;