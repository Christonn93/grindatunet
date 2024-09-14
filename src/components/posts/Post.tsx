import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Chip } from '@mui/material';
import { Post as PostType } from '../../types/blogTypes';

interface PostProps {
  post: PostType | null;
}

const Post: React.FC<PostProps> = ({ post }) => {
  if (!post) {
    return (
      <Box sx={{ maxWidth: 800, mx: 'auto', p: 2 }}>
        <Typography variant="h4">Post Not Found</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 2 }}>
      <Card>
        {post.heroImage && (
          <CardMedia
            component="img"
            height="400"
            image={post.heroImage}
            alt={post.title}
          />
        )}
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {post.date}
          </Typography>
          <Typography variant="body1" paragraph>
            {post.content}
          </Typography>
          {post.images && post.images.length > 0 && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {post.images.map((image, index) => (
                <CardMedia
                  key={index}
                  component="img"
                  image={image}
                  alt={`Post image ${index + 1}`}
                  sx={{ width: 200, height: 200, objectFit: 'cover', m: 1 }}
                />
              ))}
            </Box>
          )}
          {post.tags && (
            <Box sx={{ mt: 2 }}>
              {post.tags.split(' ').map((tag, index) => (
                <Chip key={index} label={tag} sx={{ mr: 1 }} />
              ))}
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Post;
