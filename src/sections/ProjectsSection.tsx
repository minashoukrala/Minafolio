import React from "react";
import { Box, Typography } from "@mui/material";

const ProjectsSection: React.FC = () => {
  return (
    <Box
  id="projects"
  sx={{
    width: "100%",
    minHeight: "100vh",
    bgcolor: "background.paper",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    justifyContent: "center",
    padding: { xs: "40px 20px", md: "80px 100px" },
  }}
>
  <Typography variant="h2" sx={{ color: "text.primary", textAlign: { xs: "center", md: "left" } }}>
    Projects
  </Typography>
</Box>
  );
};

export default ProjectsSection;