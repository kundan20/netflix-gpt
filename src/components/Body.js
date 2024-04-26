import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './Error'

const Body = () => {
//   const appRouter = createBrowserRouter([
//     {
//         path: '/',
//         element: <Login />,
//         children: [
//             {
//                 path: '/',
//                 element: <Login />
//             },
//             {
//                 path: '/browse',
//                 element: <Browse />
//             }
//         ],
//         errorElement: <Error />
//     }
//   ]);
  const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
        errorElement: <Error />
    },
    {
        path: '/browse',
        element: <Browse />
    }
  ]);
  return (
    <>
        <RouterProvider router={appRouter} />
    </>
  )
}

export default Body