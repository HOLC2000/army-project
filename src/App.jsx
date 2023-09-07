import './App.scss';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout';
import ErrorElement from './Components/ErrorElement';
import Login from './Components/pages/Login';
import Welcome from './Components/pages/Welcome';
import CreateAccount from './Components/pages/CreateAccount';
import MainPage from './Components/pages/MainPage';
import CreatePost from './Components/pages/CreatePost';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: 'landing-page',
        element: <Welcome />,
      },
      {
        path: 'log-in',
        element: <Login />,
      },
      {
        path: 'create-account',
        element: <CreateAccount />,
      },
      {
        path: 'logged-in',
        element: <MainPage></MainPage>,
      },
      {
        path: 'logged-in/create-post',
        element: <CreatePost></CreatePost>,
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
