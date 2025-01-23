import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0A0A0A", // Black background
    },
    secondary: {
      main: "#D4AF37", // Gold for accents
    },
    background: {
      default: "#0A0A0A", // Primary black background
      paper: "#1C1C1C", // Grey for alternating sections
    },
    text: {
      primary: "#FAFAD2", // Light Gold for readability
      secondary: "#D4AF37", // Gold for accents
    },
  },
  typography: {
    fontFamily: "Orbitron, sans-serif",
    h1: { color: "#FAFAD2", fontWeight: "bold" },
    h2: { color: "#FAFAD2" },
    h3: { color: "#FAFAD2" },
    body1: { color: "#FAFAD2" },
    allVariants: { color: "#FAFAD2" },
  },
});

export default theme;