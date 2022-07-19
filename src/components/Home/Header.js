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
      <nav class="navbar navbar-expand-lg " id='navMain'>
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="./logo.png" style={logo} /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><span id="plus">+</span></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Jobs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Companies</a>
        </li>
      </ul>
    </div>
    <div class="collapse navbar-collapse  justify-content-end" id="navbarNav">
        <ul class="navbar-nav ">
          <li class="nav-item">
           <a class="nav-link " aria-current="page" href="#">Login</a>
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