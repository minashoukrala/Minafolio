import React, { useState } from "react";
import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, ListItemButton } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu"; // Hamburger icon

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "primary.main",
          boxShadow: "none",
          height: { xs: "70px", md: "80px" },
          width: "100vw", // ✅ Ensures it fills the full screen width
          
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: "100%", // ✅ Ensures navbar elements align properly
            paddingX: { xs: "20px", md: "50px" }, // ✅ Adjusts spacing dynamically
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
            <ScrollLink to="home" smooth={true} duration={500}>
              <Button sx={{ color: "text.primary", fontSize: "1.5rem", fontWeight: "bold", textTransform: "none" }}>
                Home
              </Button>
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500}>
              <Button sx={{ color: "text.primary", fontSize: "1.5rem", fontWeight: "bold", textTransform: "none" }}>
                Projects
              </Button>
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500}>
              <Button sx={{ color: "text.primary", fontSize: "1.5rem", fontWeight: "bold", textTransform: "none" }}>
                About
              </Button>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500}>
              <Button sx={{ color: "text.primary", fontSize: "1.5rem", fontWeight: "bold", textTransform: "none" }}>
                Contact
              </Button>
            </ScrollLink>
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
            <ListItemButton onClick={handleDrawerToggle}>
              <ScrollLink to="home" smooth={true} duration={500} style={{ width: "100%" }}>
                <Button sx={{ color: "text.primary", fontSize: "1.4rem", fontWeight: "bold", textTransform: "none" }}>
                  Home
                </Button>
              </ScrollLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleDrawerToggle}>
              <ScrollLink to="projects" smooth={true} duration={500} style={{ width: "100%" }}>
                <Button sx={{ color: "text.primary", fontSize: "1.4rem", fontWeight: "bold", textTransform: "none" }}>
                  Projects
                </Button>
              </ScrollLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleDrawerToggle}>
              <ScrollLink to="about" smooth={true} duration={500} style={{ width: "100%" }}>
                <Button sx={{ color: "text.primary", fontSize: "1.4rem", fontWeight: "bold", textTransform: "none" }}>
                  About
                </Button>
              </ScrollLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleDrawerToggle}>
              <ScrollLink to="contact" smooth={true} duration={500} style={{ width: "100%" }}>
                <Button sx={{ color: "text.primary", fontSize: "1.4rem", fontWeight: "bold", textTransform: "none" }}>
                  Contact
                </Button>
              </ScrollLink>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;