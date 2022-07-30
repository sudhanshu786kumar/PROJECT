import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Header from "./components/Home/Header"
import Home from './components/Home/Home';
import Register from './components/User/Register';
import Form from './components/Admin/Form';
import Detail from './components/User/Detail';
import { useSelector } from 'react-redux';
const App = () => {
  const isLoggedIn=useSelector(state=>state.isLoggedIn)
  console.log(isLoggedIn)
  return (
   
    <div >

      <header style={{backgroundColor:"#8A39E1"}} ><Header /></header>
      <main>
        <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/register' element={<Register/>} exact/>
            
            <Route path='/users' element={<Detail/>} exact/>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/' element={<Home/>} exact/> 
        </Routes>


      </main>
    </div>
  )
}

export default App