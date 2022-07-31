import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router';

import { useDispatch } from 'react-redux';
import { authActions } from '../../store';

const Admin = () => {
    const dispatch = useDispatch()
    const history=useNavigate();

    const [login, getLogin] = useState({
        name: '',
        password: ''
      })
      const handleInput = (e) => {
    
        getLogin((r) => (
          {
            ...r, [e.target.name]: e.target.value
          }
        ))
     
     console.log(login)
      }
    const sendRequest=async()=>{
 
   
        const res = await axios.post("http://localhost:5000/admin/login",{
        name:login.name,
        password:login.password
        }).catch((err)=>console.log(err))
      
      const data=res.data;
      return data;
      }
    const handleSubmit=(e)=>{
        e.preventDefault()
   
   
    sendRequest().then(()=>dispatch(authActions.login())).then(()=>history('/admin/form'))
   
   
   
   
   }


    return (
        <>
           <form id="Adminlogin" onSubmit={handleSubmit}   encType="multipart/form-data">
                    <div className="mb-3 logfc" >
                      <div><h1>LOGIN <span><img src='./statfiles/login.png' className='icimg'/></span></h1>
                      
                      </div> <br/>
                   
                      <label for="exampleInputEmail1" className="form-label">Email</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleInput} name='name' />
                     
                    </div>



                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">Password</label> 
                      <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={handleInput} />
                    </div>
                   
                    <button type="submit" className="btn btn-primary" >Submit</button>
                  </form>

        </>
          
          
    )
}

export default Admin