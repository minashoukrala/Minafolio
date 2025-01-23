import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const profilePic = "/my-portfolio/public/professional_portrait-removebg-preview.png";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut", delay: 2 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1C1C1C", // Charcoal Black (matches website)
        color: "#C0C0C0", // Silver text (matches theme)
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      <motion.img
        src={profilePic}
        alt="Loading"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          width: "150px",
          borderRadius: "50%",
          border: "4px solid #4169E1", // Royal blue border
          boxShadow: "0px 4px 20px rgba(65, 105, 225, 0.5)",
          marginBottom: "20px",
        }}
      />

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{ fontSize: "24px", color: "#C0C0C0" }}
      >
        Mina Shoukrala
      </motion.h1>
    </motion.div>
  );
};

export default LoadingScreen;