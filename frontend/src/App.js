<<<<<<< HEAD
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Header from "./components/Home/Header"
import Home from './components/Home/Home';
import Register from './components/User/Register';
import Form from './components/Admin/Form';
import Detail from './components/User/Detail';
import { useSelector } from 'react-redux';
import Education from './components/User/Education';
import Employment from './components/User/Employment';
import Admin from './components/Admin/Admin.js'
import Personal from './components/User/Personal'
=======
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Home/Header";
import Home from "./components/Home/Home";
import Register from "./components/User/Register";
import Form from "./components/Admin/Form";
import Detail from "./components/User/Detail";
import { useSelector } from "react-redux";
import Education from "./components/User/Education";
import Employment from "./components/User/Employment";

>>>>>>> 877c2a09935b9b92b7a10225ddf60a76a5102963
const App = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div>
      <header style={{ backgroundColor: "#8A39E1" }}>
        <Header />
      </header>
      <main>
        <Routes>
<<<<<<< HEAD
            <Route path='/' element={<Home/>} exact/>
            <Route path='/register' element={<Register/>} exact/>
            <Route path='/admin' element={<Admin/>} exact/>
            <Route path='/users' element={<Detail/>} exact/>
            <Route path='/education/:id' element={<Education/>} exact/>
            <Route path='/employment/:id' element={<Employment/>} exact/> 
            <Route path='/Personal/:id' element={<Personal/>} exact/> 
=======
          <Route path="/" element={<Home />} exact />
          <Route path="/register" element={<Register />} exact />

          <Route path="/users" element={<Detail />} exact />
          <Route path="/education/:id" element={<Education />} exact />
          <Route path="/employment/:id" element={<Employment />} exact />
          <Route path="/form" element={<Form />} exact />
>>>>>>> 877c2a09935b9b92b7a10225ddf60a76a5102963
        </Routes>
      </main>
    </div>
  );
};

export default App;
