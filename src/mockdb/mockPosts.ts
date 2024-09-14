// src/services/mockApi.ts

// Mock posts data
const mockPosts = [
    {
      id: '1',
      title: 'Sample Post 1',
      content: 'This is a sample post content with some #sampleTag.',
      heroImage: 'https://via.placeholder.com/800x400',
      images: ['https://via.placeholder.com/400x200'],
      tags: '#sampleTag',
      date: new Date().toISOString(),
      author: 'user1',
    },
    {
      id: '2',
      title: 'Sample Post 2',
      content: 'Another example post content with #anotherTag.',
      heroImage: 'https://via.placeholder.com/800x400',
      images: ['https://via.placeholder.com/400x200'],
      tags: '#anotherTag',
      date: new Date().toISOString(),
      author: 'user2',
    },
  ];
  
  // Function to fetch posts
  export const fetchPosts = async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockPosts), 1000);
    });
  };
  
  // Function to create a new post
  export const createPost = async (post: {
    title: string;
    heroImage: string; // Changed from File to string
    images: string[]; // Changed from File[] to string[]
    content: string;
    tags: string;
    date: string;
    author: string;
  }) => {
    const newPost = {
      id: (mockPosts.length + 1).toString(),
      ...post,
    };
    mockPosts.push(newPost);
    return new Promise((resolve) => {
      setTimeout(() => resolve(newPost), 1000);
    });
  };
  