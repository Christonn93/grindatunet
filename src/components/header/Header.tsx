import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/ng_logo.png";
import Navigation from "../../components/navigation/Navigation";

const Header: React.FC = () => {
 return (
  <Box
   sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: "16px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
   }}
  >
   <Box sx={{ display: "flex", alignItems: "center" }}>
    <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
     <img src={logo} alt="Logo" style={{ height: "40px", marginRight: "16px" }} />
    </Link>
    <Typography variant="h2">Grinda Tunet</Typography>
   </Box>
   <Box
    sx={{
     display: "flex",
     alignItems: "center",
     gap: 1,
    }}
   >
    <Navigation />
   </Box>
  </Box>
 );
};

export default Header;
