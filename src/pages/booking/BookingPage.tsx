import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, CircularProgress, Alert, Box, Paper } from '@mui/material';

const BookingPage: React.FC = () => {
  const [content, setContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPageContent = async () => {
      try {
        const response = await axios.get('https://admin.grindatunet.no/wp-json/wp/v2/pages?slug=wpbc-booking');
        if (response.data && response.data.length > 0) {
          setContent(response.data[0].content.rendered);
        } else {
          setError('Page not found');
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('Error fetching page content');
      } finally {
        setLoading(false);
      }
    };

    fetchPageContent();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container>

      <Paper elevation={3} sx={{ padding: 2, boxShadow: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Booking Page
      </Typography>
        <div dangerouslySetInnerHTML={{ __html: content || '' }} />
      </Paper>
    </Container>
  );
};

export default BookingPage;
