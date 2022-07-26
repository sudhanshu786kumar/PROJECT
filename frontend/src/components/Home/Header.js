import React from 'react'
import { NavLink } from 'react-router-dom'
import './home.css'
let logo={
  maxWidth:'200px',
  maxHeight:'100px'
}
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg " id='navMain'>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="./logo.png" style={logo} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"><span id="plus"></span></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Jobs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Companies</a>
        </li>
      </ul>
    </div>
    <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item">
           <a className="nav-link " aria-current="page" href="#">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        {/* <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/Companies">Companies</NavLink>
        
        <NavLink to="/logout">Logout</NavLink>
        <NavLink to="/profile/:id">Profile</NavLink> */}
    </div>
  )
}

export default Header