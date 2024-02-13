import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LayOut from './components/LayOut';
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import PostDetails from './pages/PostDetails'
import Register from './pages/Register'
import Login from './pages/Login'
import LogOut from './pages/LogOut'
import UserProfile from './pages/UserProfile'
import Authors from './pages/Authors'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import CategoryPost from './pages/CategoryPost'
import AuthorsPost from './pages/AuthorsPost'
import DashBoard from './pages/DashBoard'




const router = createBrowserRouter([

  {
    path: '/',
    element: <LayOut />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'posts/:id', element: <PostDetails /> },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
      { path: 'logout', element: <LogOut /> },
      { path: 'profile/:id', element: <UserProfile /> },
      { path: 'authors', element: <Authors /> },
      { path: 'create', element: <CreatePost /> },
      { path: 'posts/:id/edit', element: <EditPost /> },
      { path: 'posts/categories/:category', element: <CategoryPost /> },
      { path: 'posts/users/:id', element: <AuthorsPost /> },
      { path: 'myposts/:id', element: <DashBoard /> }




    ]

  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


