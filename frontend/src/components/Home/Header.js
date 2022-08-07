import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./home.css";
import axios from "axios";
import { authActions } from "../../store";
import { Link } from "react-router-dom";
axios.defaults.withCredentials = true;
let logo = {
  maxWidth: "200px",
  maxHeight: "100px",
};
const Header = () => {
  const hist=useNavigate()
  const dispatch = useDispatch()
  const isLoggedIn=useSelector(state=>state.isLoggedIn);
const sendRequest=async()=>{
const res=await axios.post("http://localhost:5000/user/logout",null,{
  withCredentials:true
});
if(res.status==200){
  return res
}
return new Error("unable to logout")
}
  const handleLogout=()=>{
sendRequest().
then(()=>dispatch(authActions.logout())).then(hist('/')).then( window.location.reload());
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg " id="navMain">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img alt="" src="./logo.gif" id="logoimg" style={logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <span id="plus" style={{color:"black"}}>=</span>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/jobs">
                  JOBS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/admin">
                  ADMIN
                </Link>
              </li>
              {isLoggedIn && (
                
                <li className="nav-item">
                  
                  <Link
                    className="nav-link "
                    aria-current="page"
                   to="/users"
                  >
                   USER
             
                     
                  </Link>
                  
                  
                </li>
                
              )}
            </ul>
          </div>
          <div
            className="collapse navbar-collapse  justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/register">
                  SIGNUP
                  <span className="icod">
                    <img src="./statfiles/signup.png" className="icimg" />
                  </span>
                </a>
              </li>
              {isLoggedIn && (
                
                <li className="nav-item">
                  
                  <a
                    className="nav-link "
                    aria-current="page"
                    onClick={handleLogout}
                  >
                    LOGOUT
                    <span className="icod">
                      <img src="./statfiles/signup.png" className="icimg" />
                    </span>
                    <span className="icod">
                      <img src="profile.jpg" className="icimg" />
                    </span>
                  </a>
                  
                  
                </li>
                
              )}
            
            </ul>
          </div>
        </div>
      </nav>

      {/* <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/Companies">Companies</NavLink>
        
        <NavLink to="/logout">Logout</NavLink>
        <NavLink to="/profile/:id">Profile</NavLink> */}
    </div>
  );
};

export default Header;
