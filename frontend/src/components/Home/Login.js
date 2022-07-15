import React from 'react'
import { NavLink } from 'react-router-dom'
const Login = () => {
  return (
    <>
      <p>Login</p>
      <input/>
      <input/>
      <button>Submit</button>
      <NavLink to="/register">Sign Up </NavLink>
    </>
  )
}

export default Login