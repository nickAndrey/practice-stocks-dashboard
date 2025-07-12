import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import App from './App';

const HomePage = lazy(() => import('@/domains/home/Home'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/dashboard',
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
