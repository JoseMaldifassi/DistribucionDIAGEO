import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Home_layout from './layouts/Home_layout.tsx';
import NotFoundPage from './components/404/NotFoundPage.tsx'
import Business from './pages/Business.tsx';
import Business_layout from './layouts/Business_layout.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home_layout />,
    children: [
      {
        path: "/",
        element: <Home/>
      }
    ]
  },
  {
    path: "/business",
    element: <Business_layout />,
    children: [
      {
        path: "/business",
        element: <Business/>
      }
    ]
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />
  },
  {
    path: "*", 
    element: <Home_layout />,
    children: [
      {
        path: "*", 
        element: <NotFoundPage />
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>
)
