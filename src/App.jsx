import './App.scss';
import React from 'react';
import Header from './Components/Header';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from 'react-router-dom';
import Layout from './Components/Layout';
import ErrorElement from './Components/ErrorElement';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: 'welcome',
        element: <div>Hello</div>,
      },
      {
        path: 'log-in',
        element: <div>Log-in</div>,
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
