import { Post } from '../types/blogTypes';

const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Sample Post',
    heroImage: 'https://via.placeholder.com/800x400',
    images: ['https://via.placeholder.com/200', 'https://via.placeholder.com/200'],
    content: 'This is a sample post content.',
    tags: '#sample #post',
    date: new Date().toISOString(),
    author: 'John Doe',
  },
  // Add more mock posts if needed
];

export const fetchPosts = async (): Promise<Post[]> => {
  // Simulate a delay for fetching data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockPosts);
    }, 1000);
  });
};
