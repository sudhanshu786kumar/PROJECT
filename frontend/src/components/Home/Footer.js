import React from 'react'

const Footer = () => {
  let footerstyle = {
    backgroundcolor:"dark",
    position: "sticky",
    top:"70vh",
    width:"100%",
  }
  return (
    <footer style={footerstyle}>
      <p>
       Copyright &copy; bruteforce.com
      </p>
    </footer>
  )
}

export default Footer
