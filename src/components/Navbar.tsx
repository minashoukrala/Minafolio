import React, { useState } from "react";
import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, ListItemButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Hamburger icon

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Function to scroll to a section smoothly
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
    setMobileOpen(false); // Close mobile menu after clicking
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "primary.main",
          boxShadow: "none",
          height: { xs: "70px", md: "80px" },
          width: "100vw",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: "100%",
            paddingX: { xs: "20px", md: "50px" },
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src="b96df776def348648835c0b74109673a-free__3_-removebg-preview.png"
            alt="Mina Shoukrala Logo"
            sx={{
              width: { xs: "120px", md: "150px" },
              height: "auto",
              objectFit: "contain",
              marginTop: "5px",
            }}
          />

          {/* Navbar Links - Visible on Large Screens */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "40px" }}>
            <Button onClick={() => scrollToSection("home")} sx={{ color: "text.primary", fontSize: "1.5rem", fontWeight: "bold", textTransform: "none" }}>
              Home
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

          {/* Hamburger Menu Button - Visible on Small Screens */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "text.primary" }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer for Mobile Navigation */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: "250px",
            bgcolor: "primary.main",
            color: "text.primary",
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