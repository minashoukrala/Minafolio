import React from "react";
import { Box, Typography } from "@mui/material";

const ContactSection: React.FC = () => {
  return (
    <Box id="contact" sx={{ height: "100vh", bgcolor: "background.paper", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Typography variant="h2" sx={{ color: "text.primary" }}>Contact</Typography>
    </Box>
  );
};

export default ContactSection;