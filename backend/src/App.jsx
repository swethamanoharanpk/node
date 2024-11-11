import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { useSelector } from 'react-redux'

import Profile from './pages/Profile'
import Home from './pages/Home'


function App() {
  
  const userDetails = useSelector((state)=>state.loginInfo.login)
  console.log("final answer333333",userDetails);
  if(userDetails){
    var token = userDetails.token
  }
  console.log("finaltoken value" ,token);
  
  
  const display = createBrowserRouter([
    {path:'/',
      element:token?<Home/>:<Login/>
    },
    {path:'/signup',
      element:<Signup/>
    },
    {path:'/profilepage',
      element:token?<Profile/>:<Login/>
    }
  ])
  return (
    
    <RouterProvider router={display}></RouterProvider>
    
    
    
  )
  
}

export default App