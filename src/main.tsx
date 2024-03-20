import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Home_layout from './layouts/Home_layout.tsx';


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
    path: "login",
    element: <div>Login Page</div>,
  },
  {
    path: "register",
    element: <div>Regisgter page</div>
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>
)
