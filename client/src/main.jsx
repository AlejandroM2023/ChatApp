import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx';
import Home from './pages/home'
import Chat from './pages/chat'
import Auth from './pages/auth'
import Profile from './pages/profile'
import Error from './pages/ErrorPage.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'login',
        element: <Auth/>
      },
      {
        path: 'chat',
        element: <Chat/>
      },
      {
        path: 'profile',
        element: <Profile/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
