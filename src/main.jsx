import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import Login from './Pages/Auth/Login/Login';
import Signup from './Pages/Auth/Signup/Signup';
import NotFoundPage from './Pages/NotFoundPage';
import ForgotPassword from './Pages/Auth/ForgotPassword/ForgotPassword';
import ResetPassword from './Pages/Auth/ResetPassword/ResetPassword';
import Onboarding from './Pages/Onboarding/Onboarding';
import Assessment from './Pages/Onboarding/Assessment';
import SignupConfirmation from './Pages/Auth/Signup/SignupConfirmation';
import SelectClasses from './Pages/Onboarding/SelectClasses';
import ExamPage from './Pages/Onboarding/ExamPage';


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
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/signup-confirmation',
    element: <SignupConfirmation />,
  },
  {
      path: '/select-classes',
      element: <SelectClasses />,
  },
  
  {
    path: '/onboarding',
    element: <Onboarding />,
  },
  {
    path: '/assessment',
    element: <Assessment />,
  },
  {
    path: '/exam-page',
    element: <ExamPage />
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

