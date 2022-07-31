import React from 'react'
import './home.css'
const Footer = () => {
  let footerstyle = {
  color:"#000",
    position: "sticky",
    top:"70vh",
    width:"100%",
    backgroundColor:"rgb(25, 226, 158)",
    
  }
  return (
    <p className="copyright" style={footerstyle}>
      Copyright &copy;2022 BruteForce
    </p>
  )
}

export default Footer
