import React from "react";
import { Box, Typography } from "@mui/material";

const ContactSection: React.FC = () => {
  return (
    <Box
      id="contact"
      sx={{
        width: "100vw", // ✅ Ensures it takes full screen width
        minHeight: "100vh", // ✅ Ensures correct section height
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden", // ✅ Prevents any unexpected scrolling
        padding: { xs: "40px 20px", md: "80px 100px" }, // ✅ Better responsiveness
      }}
    >
      <Typography variant="h2" sx={{ color: "text.primary", fontWeight: "bold", textAlign: "center" }}>
        Contact Me
      </Typography>
    </Box>
  );
};

export default ContactSection;