import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/Companies">Companies</NavLink>
        
        <NavLink to="/logout">Logout</NavLink>
        <NavLink to="/profile/:id">Profile</NavLink>
    </div>
  )
}

export default Header