import React from 'react'
import './home.css'
const Footer = () => {
  let footerstyle = {
    backgroundcolor:"dark",
    position: "sticky",
    top:"70vh",
    width:"100%",
  }
  return (
    <p className="copyright">
      Copyright &copy;2022 BruteForce
    </p>
  )
}

export default Footer
