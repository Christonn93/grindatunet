import React, { useState } from "react";
import { Box, Link as MuiLink, Menu, MenuItem, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
 // State for Blog dropdown
 const [anchorElBlog, setAnchorElBlog] = useState<null | HTMLElement>(null);
 const openBlog = Boolean(anchorElBlog);

 // State for Info dropdown
 const [anchorElInfo, setAnchorElInfo] = useState<null | HTMLElement>(null);
 const openInfo = Boolean(anchorElInfo);

 // Handle Blog dropdown
 const handleBlogClick = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorElBlog(event.currentTarget);
 };
 const handleBlogClose = () => {
  setAnchorElBlog(null);
 };

 // Handle Info dropdown
 const handleInfoClick = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorElInfo(event.currentTarget);
 };
 const handleInfoClose = () => {
  setAnchorElInfo(null);
 };

 return (
  <Box
   sx={{
    display: "flex",
    justifyContent: "center",
    mt: 2,
    alignItems: "center",
   }}
  >
   <MenuItem
    component={Link}
    to="/home"
    onClick={handleInfoClose}
    sx={{
     color: "primary.main",
     fontSize: "1rem",
     fontWeight: "bold",
     cursor: "pointer",
    }}
   >
    Home
   </MenuItem>
   {/* Info Dropdown */}
   <MuiLink
    component="button"
    onClick={handleInfoClick}
    underline="none"
    sx={{
     mx: 2,
     color: "primary.main",
     fontSize: "1rem",
     fontWeight: "bold",
     cursor: "pointer",
    }}
   >
    Info
   </MuiLink>
   <Menu anchorEl={anchorElInfo} open={openInfo} onClose={handleInfoClose}>
    <MenuItem component={Link} to="/info/about" onClick={handleInfoClose}>
     About
    </MenuItem>
    <MenuItem component={Link} to="/info/terms" onClick={handleInfoClose}>
     Terms
    </MenuItem>
    <MenuItem component={Link} to="/info/privacy" onClick={handleInfoClose}>
     Privacy
    </MenuItem>
   </Menu>

   {/* Blog Dropdown */}
   <MuiLink
    component="button"
    onClick={handleBlogClick}
    underline="none"
    sx={{
     mx: 2,
     color: "primary.main",
     fontSize: "1rem",
     fontWeight: "bold",
     cursor: "pointer",
    }}
   >
    Blog
   </MuiLink>
   <Menu anchorEl={anchorElBlog} open={openBlog} onClose={handleBlogClose}>
    <MenuItem component={Link} to="/blog/create" onClick={handleBlogClose}>
     Create Post
    </MenuItem>
    <MenuItem component={Link} to="/blog/posts" onClick={handleBlogClose}>
     Posts
    </MenuItem>
    <MenuItem component={Link} to="/blog/images" onClick={handleBlogClose}>
     Images
    </MenuItem>
   </Menu>

   {/* Other Links */}
   <MuiLink
    component={Link}
    to="/feedback"
    underline="none"
    sx={{
     mx: 2,
     color: "primary.main",
     fontSize: "1rem",
     fontWeight: "bold",
    }}
   >
    Feedback
   </MuiLink>

   {/* Booking CTA Button */}
   <Button
    component={Link}
    to="/booking"
    variant="contained"
    sx={{
     mx: 2,
     backgroundColor: "#f56203", // Custom color for the CTA
     color: "white",
     fontWeight: "bold",
     fontSize: "1rem",
     padding: "8px 16px",
     borderRadius: "4px",
     "&:hover": {
      backgroundColor: "#e55102", // Slightly darker on hover
     },
    }}
   >
    Booking
   </Button>
  </Box>
 );
};

export default Navigation;
