import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [content, setContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageContent = async () => {
      try {
        const response = await axios.get('https://admin.grindatunet.no/wp-json/wp/v2/pages?slug=home');
        if (response.data && response.data.length > 0) {
          setContent(response.data[0].content.rendered);
        } else {
          setError('Page not found');
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('Error fetching page content');
      }
    };

    fetchPageContent();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content || '' }} />
    </div>
  );
};

export default HomePage;
