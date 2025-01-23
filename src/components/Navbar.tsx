import React, { useState } from "react";
import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, ListItemButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Importing Material UI's Hamburger Icon

const Navbar: React.FC = () => {
  // State for controlling mobile menu visibility
  const [mobileOpen, setMobileOpen] = useState(false);

  // Function to toggle mobile menu
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Function to scroll smoothly to a section when clicking a navbar item
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth", // Enables smooth scrolling animation
      });
    }
    setMobileOpen(false); // Close mobile menu after clicking
  };

  return (
    <>
      {/* Navbar Container */}
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "primary.main", // Navbar background color
          boxShadow: "none", // Removes default shadow
          height: { xs: "70px", md: "80px" }, // Responsive navbar height
          width: "100vw", // Full width navbar
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between", // Aligns elements on both sides
            alignItems: "center",
            width: "100%",
            paddingX: { xs: "20px", md: "50px" }, // Adjusts padding for responsiveness
          }}
        >
          {/* Logo Section */}
          <Box
            component="img"
            src="/my-portfolio/public/logo.png"
            alt="Mina Shoukrala Logo"
            sx={{
              width: { xs: "120px", md: "150px" }, // Responsive logo size
              height: "auto",
              objectFit: "contain",
              marginTop: "5px",
            }}
          />

          {/* Desktop Navbar Links (Visible on Large Screens) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "40px" }}>
            <Button onClick={() => scrollToSection("home")} sx={{ color: "text.primary", fontSize: "1.5rem", fontWeight: "bold", textTransform: "none" }}>
              Home
            </Button>
            <Button onClick={() => scrollToSection("experience")} sx={{ color: "text.primary", fontSize: "1.5rem", fontWeight: "bold", textTransform: "none" }}>
              Experience
            </Button>
            <Button onClick={() => scrollToSection("education")} sx={{ color: "text.primary", fontSize: "1.5rem", fontWeight: "bold", textTransform: "none" }}>
              Education
            </Button>
            <Button onClick={() => scrollToSection("projects")} sx={{ color: "text.primary", fontSize: "1.5rem", fontWeight: "bold", textTransform: "none" }}>
              Projects
            </Button>
            <Button onClick={() => scrollToSection("about")} sx={{ color: "text.primary", fontSize: "1.5rem", fontWeight: "bold", textTransform: "none" }}>
              About
            </Button>
            <Button onClick={() => scrollToSection("contact")} sx={{ color: "text.primary", fontSize: "1.5rem", fontWeight: "bold", textTransform: "none" }}>
              Contact
            </Button>
          </Box>

          {/* Hamburger Menu Button (Visible on Small Screens) */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "text.primary" }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Sidebar Menu (Drawer) */}
      <Drawer
        anchor="right" // Menu slides in from the right
        open={mobileOpen} // Controls menu visibility
        onClose={handleDrawerToggle} // Closes menu when clicking outside
        sx={{
          "& .MuiDrawer-paper": {
            width: "250px", // Sidebar width
            bgcolor: "primary.main", // Background color
            color: "text.primary", // Text color
          },
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => scrollToSection("home")}>
              <Button sx={{ color: "text.primary", fontSize: "1.4rem", fontWeight: "bold", textTransform: "none" }}>
                Home
              </Button>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => scrollToSection("experience")}>
              <Button sx={{ color: "text.primary", fontSize: "1.4rem", fontWeight: "bold", textTransform: "none" }}>
                Experience
              </Button>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => scrollToSection("education")}>
              <Button sx={{ color: "text.primary", fontSize: "1.4rem", fontWeight: "bold", textTransform: "none" }}>
                Education
              </Button>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => scrollToSection("projects")}>
              <Button sx={{ color: "text.primary", fontSize: "1.4rem", fontWeight: "bold", textTransform: "none" }}>
                Projects
              </Button>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => scrollToSection("about")}>
              <Button sx={{ color: "text.primary", fontSize: "1.4rem", fontWeight: "bold", textTransform: "none" }}>
                About
              </Button>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => scrollToSection("contact")}>
              <Button sx={{ color: "text.primary", fontSize: "1.4rem", fontWeight: "bold", textTransform: "none" }}>
                Contact
              </Button>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;