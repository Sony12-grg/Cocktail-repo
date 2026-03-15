import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import RootLayout from './Components/RootLayout';
import Api from './Components/Api';


export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>
      ,children:[
        {
          index: true,
          element: <Home />
        },
        {
          path: "/api",
          element: <Api />
        }
      ]

    }
  ]);


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
