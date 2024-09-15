import React from "react";
import {  Container, Typography } from "@mui/material";
import { useFetchPageBySlug } from "../../hooks/query/useFetchPage";

interface PageProps {
 slug: string; 
}

const PageContent: React.FC<PageProps> = ({ slug }) => {
 const { data, error } = useFetchPageBySlug(slug);

 if (error) {
  console.error("Error fetching page:", error);
  return (
   <Container>
    <Typography variant="h6" color="error" align="center">
     Error: {error instanceof Error ? error.message : "An unknown error occurred"}
    </Typography>
   </Container>
  );
 }

 if (!data) {
  return (
   <Container>
    <Typography variant="h6" color="textSecondary" align="center">
     Page not found.
    </Typography>
   </Container>
  );
 }

 return (
  <Container>
   <Typography variant="h4" gutterBottom>
    {data.title.rendered}
   </Typography>
   <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} style={{ lineHeight: 1.5 }} />
  </Container>
 );
};

export default PageContent;
