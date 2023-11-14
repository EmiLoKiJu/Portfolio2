import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '@/components/Home';
import ErrorPage from '@/components/ErrorPage';
import Portfolio from '../components/Portfolio';

export default function Router() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: < Portfolio/>,
          children: []
        },
      ]},
  ]);

  return (
    <RouterProvider router={routes}/>
  );
}
