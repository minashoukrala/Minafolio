import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import HomeSection from "./sections/HomeSection";
import ProjectsSection from "./sections/ProjectsSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import LoadingScreen from "./components/LoadingScreen"; // Import the loading screen

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Matches LoadingScreen's duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{
    width: "99vw", // to ensure no overflow
    minHeight: "100vh",
    overflowX: "hidden", // ✅ Prevents unwanted horizontal scrolling
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <HomeSection />
          <ProjectsSection />
          <AboutSection />
          <ContactSection />
        </>
      )}
    </Box>
  );
};

export default App;