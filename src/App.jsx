import './App.scss';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Layout from './Components/Layout';
import ErrorElement from './Components/ErrorElement';
import Login from './Components/pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: 'welcome',
        element: <div>Welcome</div>,
      },
      {
        path: 'log-in',
        element: <Login/>,
      },
      {
        path: 'logged-in',
        element: <div>logeed</div>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
