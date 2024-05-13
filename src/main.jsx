import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignInSide from './components/Signin.jsx';
import SignUp from './components/Signup.jsx';
import Home from './components/Home.jsx';
// import Register from './components/register.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path:'/home',
    element:<Home/>
  },
  {
    path: '/signin',
    element : <SignInSide />
  },
  {
    path:'/signup',
    element:<SignUp />
  },


])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)