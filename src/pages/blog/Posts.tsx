import React from "react";
import { CircularProgress, Container, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { useFetchPosts } from "../../hooks/query/useFetchPosts";

const Posts: React.FC = () => {
 const { data, error, isLoading } = useFetchPosts();

 if (isLoading) {
  return (
   <Container>
    <CircularProgress />
    <Typography variant="h6" color="textSecondary" align="center">
     Loading...
    </Typography>
   </Container>
  );
 }

 if (error) {
  console.error("Error fetching posts:", error);
  return (
   <Container>
    <Typography variant="h6" color="error" align="center">
     Error: {error instanceof Error ? error.message : "An unknown error occurred"}
    </Typography>
   </Container>
  );
 }

 if (!data || data.length === 0) {
  return (
   <Container>
    <Typography variant="h6" color="textSecondary" align="center">
     No posts found.
    </Typography>
   </Container>
  );
 }

 return (
  <Container>
   <Typography variant="h4" gutterBottom>
    Posts
   </Typography>
   <Paper>
    <List>
     {data.map((post) => (
      <ListItem key={post.id}>
       <ListItemText
        primary={<Typography variant="h6">{post.title}</Typography>}
        secondary={<div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} style={{ lineHeight: 1.5 }} />}
       />
      </ListItem>
     ))}
    </List>
   </Paper>
  </Container>
 );
};

export default Posts;
