import React from 'react'
import Footer from './Footer'
import Login from './Login';

const Home = () => {
  return (
    <>
    <div>Home</div>
   
    
    <div style={{display:"flex",margin:0}}>
  <div>
      <div>
        <img src="logo.png" width="100%" padding="10px"/></div>
      <div>
        <input placeholder="skills"/><input placeholder="location"/><button>Find Jobs</button>
      </div>
  </div>
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",alignContent:"center"}}>
<Login/>
      </div>
      
    </div>
    <section>

    </section>

    <Footer/>
    </>
  )
}

export default Home
