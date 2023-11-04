import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/App.css';

// pages
import Home from './pages/Index';
import Dashboard from './layouts/Dashboard.tsx';

// app routes
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
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
