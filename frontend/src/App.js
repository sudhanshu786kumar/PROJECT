import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Header from "./components/Home/Header"
import Home from './components/Home/Home';
import Register from './components/User/Register';
import Form from './components/Admin/Form';
const App = () => {
  return (
   
    <div >

      <header style={{backgroundColor:"#8A39E1"}} ><Header /></header>
      <main>
        <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/register' element={<Register/>} exact/>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/' element={<Home/>} exact/>
        </Routes>


      </main>
    </div>
  )
}

export default App