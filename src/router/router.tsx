import { createBrowserRouter } from 'react-router-dom';
import LayoutComponent from '../components/layout/LayoutComponent';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage';
import PhotoPage from '../pages/PhotoPage';
import InfoPage from '../pages/InfoPage';
import RulesPage from '../pages/RulesPage';
import FeedbackPage from '../pages/FeedbackPage';
import BlogPage from '../pages/BlogPage';

// Blog-related pages
import CreatePost from '../pages/blog/CreatePost';
import Posts from '../pages/blog/Posts';
import Images from '../pages/blog/Images';

// Info-related pages
import About from '../pages/info/About';
import Terms from '../pages/info/Terms';
import Privacy from '../pages/info/Privacy';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: (
      <LayoutComponent>
        <HomePage />
      </LayoutComponent>
    ),
  },
  {
    path: "/booking",
    element: (
      <LayoutComponent>
        <BookingPage />
      </LayoutComponent>
    ),
  },
  {
    path: "/photos",
    element: (
      <LayoutComponent>
        <PhotoPage />
      </LayoutComponent>
    ),
  },
  {
    path: "/info",
    element: (
      <LayoutComponent>
        <InfoPage />
      </LayoutComponent>
    ),
  },
  {
    path: "/rules",
    element: (
      <LayoutComponent>
        <RulesPage />
      </LayoutComponent>
    ),
  },
  {
    path: "/feedback",
    element: (
      <LayoutComponent>
        <FeedbackPage />
      </LayoutComponent>
    ),
  },
  {
    path: "/blog",
    element: (
      <LayoutComponent>
        <BlogPage />
      </LayoutComponent>
    ),
  },
  {
    path: "/blog/create",
    element: (
      <LayoutComponent>
        <CreatePost />
      </LayoutComponent>
    ),
  },
  {
    path: "/blog/posts",
    element: (
      <LayoutComponent>
        <Posts />
      </LayoutComponent>
    ),
  },
  {
    path: "/blog/images",
    element: (
      <LayoutComponent>
        <Images />
      </LayoutComponent>
    ),
  },
  {
    path: "/info/about",
    element: (
      <LayoutComponent>
        <About />
      </LayoutComponent>
    ),
  },
  {
    path: "/info/terms",
    element: (
      <LayoutComponent>
        <Terms />
      </LayoutComponent>
    ),
  },
  {
    path: "/info/privacy",
    element: (
      <LayoutComponent>
        <Privacy />
      </LayoutComponent>
    ),
  },
  {
    path: "*",
    element: (
      <LayoutComponent>
        <h1>404 - Page Not Found</h1>
      </LayoutComponent>
    ),
  },
]);

export default router;
