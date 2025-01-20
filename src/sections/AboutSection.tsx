import React from "react";
import { Box, Typography } from "@mui/material";

const AboutSection: React.FC = () => {
  return (
    <Box id="about" sx={{ height: "100vh", bgcolor: "primary.main", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Typography variant="h2" sx={{ color: "text.primary" }}>About Me</Typography>
    </Box>
  );
};

export default AboutSection;