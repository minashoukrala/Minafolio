import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Box, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink } from "react-scroll";

// ✅ Ensure the correct path to your logo
const logo = "./logo.png"; // Ensure this is in the /public folder

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar position="fixed" sx={{ padding: "0px 15px", minHeight: "70px", zIndex: 1000 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: "70px" }}>
        
        {/* ✅ Clickable LOGO (Redirects to Home) - Keep Logo Size */}
        <ScrollLink to="home" smooth duration={500} style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
          <Box 
            component="img" 
            src={logo} 
            alt="Logo" 
            sx={{ 
              height: "100px", // Keep logo size the same
              width: "auto", 
              marginRight: "10px",
              
            }} 
          />
        </ScrollLink>

        {/* ✅ Navbar Links (Only on Large Screens) */}
        <Box sx={{ display: { xs: "none", md: "none", lg: "flex" }, gap: 4 }}>
          <Typography sx={navItemStyle}><ScrollLink to="about" smooth duration={500}>About</ScrollLink></Typography>
          <Typography sx={navItemStyle}><ScrollLink to="experience" smooth duration={500}>Experience</ScrollLink></Typography>
          <Typography sx={navItemStyle}><ScrollLink to="education" smooth duration={500}>Education</ScrollLink></Typography>
          <Typography sx={navItemStyle}><ScrollLink to="projects" smooth duration={500}>Projects</ScrollLink></Typography>
          <Typography sx={navItemStyle}><ScrollLink to="certifications" smooth duration={500}>Certifications</ScrollLink></Typography>
          <Typography sx={navItemStyle}><ScrollLink to="contact" smooth duration={500}>Contact</ScrollLink></Typography>
        </Box>

        {/* ✅ Hamburger Menu (Only for Small & Medium Screens) */}
        <IconButton edge="end" sx={{ display: { xs: "block", md: "block", lg: "none" }, color: "white" }} onClick={handleMenuOpen}>
          <MenuIcon sx={{ fontSize: 30 }} />
        </IconButton>

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}><ScrollLink to="about" smooth duration={500}>About</ScrollLink></MenuItem>
          <MenuItem onClick={handleMenuClose}><ScrollLink to="experience" smooth duration={500}>Experience</ScrollLink></MenuItem>
          <MenuItem onClick={handleMenuClose}><ScrollLink to="education" smooth duration={500}>Education</ScrollLink></MenuItem>
          <MenuItem onClick={handleMenuClose}><ScrollLink to="projects" smooth duration={500}>Projects</ScrollLink></MenuItem>
          <MenuItem onClick={handleMenuClose}><ScrollLink to="certifications" smooth duration={500}>Certifications</ScrollLink></MenuItem>
          <MenuItem onClick={handleMenuClose}><ScrollLink to="contact" smooth duration={500}>Contact</ScrollLink></MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

// ✅ Styling for Navbar Links
const navItemStyle = {
  color: "#FAFAD2",
  textDecoration: "none",
  fontSize: "1.25rem", // Keep font size reasonable for smaller navbar
  fontWeight: "bold",
  cursor: "pointer",
  transition: "color 0.3s",
};

export default Navbar;