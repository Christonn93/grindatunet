// src/components/LayoutComponent.tsx
import React from "react";
import { Box, Container } from "@mui/material";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const LayoutComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
 return (
  <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
   <Header />
   <Container component="main" sx={{ flexGrow: 1, mt: 3 }}>
    {children}
   </Container>
   <Footer />
  </Box>
 );
};

export default LayoutComponent;
