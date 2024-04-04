import React from 'react'
import slide1 from '../assets/Home/1.jpg'
import slide2 from '../assets/Home/2.jpg'
import slide3 from '../assets/Home/3.jpg'
import './login.css'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom'
function Login() {
  const { loginWithRedirect } = useAuth0();
  const navigate= useNavigate()
  return (
    <div className="container">
      <img className="image" onClick={()=>navigate("/s")} src={slide1} alt="" />
      <img className="image" src={slide2} alt="" />
      <img className="image" src={slide3} alt="" />
    </div>
  )
}

export default Login
