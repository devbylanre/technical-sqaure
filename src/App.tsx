import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/App.css';

// pages
import Home from './pages/Index';
import Profile from './pages/Profile/Profile';
import SignUp from './pages/SignUp';
import Theme from './pages/theme/Theme';
import SignIn from './pages/SignIn';

// layouts
import Dashboard from './layouts/dashboard/Dashboard';
import ProfileLayout from './layouts/profile/ProfileLayout';
import RootLayout from './layouts/RootLayout';

// app routes
const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'auth',
        element: <SignIn />,
      },
      {
        path: 'theme',
        element: <Theme />,
      },
    ],
  },
  {
    path: 'app',
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'courses',
        element: <Home />,
      },
      {
        path: 'docs',
        element: <Home />,
      },
      {
        path: 'square',
        element: <Home />,
      },
    ],
  },
  {
    path: '/app/profile',
    element: <ProfileLayout />,
    children: [{ index: true, element: <Profile /> }],
  },
]);

function App() {
  return (
    <div className='App font-primary'>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
