import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar.tsx";
import HomeSection from "./sections/HomeSection.tsx";
import AboutSection from "./sections/AboutSection.tsx";
import ExperienceSection from "./sections/ExperienceSection.tsx"; // ✅ Added Experience section
import ProjectsSection from "./sections/ProjectsSection.tsx";
import ContactSection from "./sections/ContactSection.tsx";
import EducationSection from "./sections/EducationSection.tsx"; // ✅ Added Education section
import LoadingScreen from "./components/LoadingScreen.tsx"; // Loading screen
import CertificationSection from "./sections/CertifictionSection.tsx";
//import CustomCursor from "react-custom-cursor";




const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Matches LoadingScreen's duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        width: "99vw", // Ensures no overflow
        minHeight: "100vh",
        overflowX: "hidden", // ✅ Prevents unwanted horizontal scrolling
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
         
          <Navbar />
          <HomeSection />
          <AboutSection />  {/* ✅ About Section after Home */}
          <ExperienceSection />  {/* ✅ Experience Section after About */}
          <EducationSection />  {/* ✅ Education Section after Experience */}
          <ProjectsSection />
          <CertificationSection />
          <ContactSection />
        </>
      )}
    </Box>
  );
};

export default App;