import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import Login from './Pages/Auth/Login/Login';
import Signup from './Pages/Auth/Signup/Signup';
import NotFoundPage from './Pages/NotFoundPage';
import ForgotPassword from './Pages/Auth/ForgotPassword/ForgotPassword';
import ResetPassword from './Pages/Auth/ResetPassword/ResetPassword';

// Import global styles
import './styles/global.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

