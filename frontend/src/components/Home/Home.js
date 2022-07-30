import React from 'react'
import Footer from './Footer'
import './home.css';
import Search from './Search';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router';
import {useEffect} from "react";
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';
const Home = () => {
  const dispatch = useDispatch()
const history=useNavigate();
const[vals,setVal]=useState(true)

 const [login, getLogin] = useState({
    email: '',
    pwd: ''
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
 
   
  const res = await axios.post("http://localhost:5000/user/signin",{
  email:login.email,
  pwd:login.pwd
  }).catch((err)=>console.log(err))

const data=res.data;
return data;
}



const handleSubmit=(e)=>{
     e.preventDefault()


 sendRequest().then(()=>dispatch(authActions.login())).then(()=>history('/users'))




}
    return (
      <>

        {/* home body */}
        <div className='homeBody'>
          <div className="row">
            <div className="col-sm-6">
              <div className="card logcard">
                <div className="card-body">
                  <img src="logo.png" width="100%" padding="8px" />
                </div>
                <div className="input-group mb-3">
                  <input type="text" id="logoInput" className="form-control" placeholder="Skills" aria-label="Username" />
                  <input type="text" id="logoInput" className="form-control" placeholder="Location" aria-label="Username" />
                  <button type="button" id="logoInput" className="btn ">Find Jobs</button>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card" id='login'>
                <div className="card-body">



                  <form id="login" onSubmit={handleSubmit}   encType="multipart/form-data">
                    <div className="mb-3 " >
                      <div><h1>LOGIN <span><img src='./statfiles/login.png' className='icimg'/></span></h1>
                      
                      </div> <br/>
                   
                      <label for="exampleInputEmail1" className="form-label">Email</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleInput} name='email' />
                     
                    </div>



                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">Password</label> 
                      <input type="password" className="form-control" id="exampleInputPassword1" name='pwd' onChange={handleInput} />
                    </div>
                   
                    <button type="submit" className="btn btn-primary" >Submit</button>
                  </form>
                </div>
              </div>
            </div>


            {/*Hot jobs part starts from here */}

            <h1 className='HotJobs'>Hot Jobs</h1>

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col" id='cardCol'>
                      <div className="card">
                        <div className="card-body">
                          <h3> LAD Software Solution PVT LTD.</h3>
                          <p> VP of marketing-B2B?</p>
                          <h5>Experience :8-13 years</h5>
                          <h5>Location:Jaipur/Coachi</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col" id='cardCol'>
                      <div className="card">
                        <div className="card-body">
                          <h3> LAD Software Solution PVT LTD.</h3>
                          <p> VP of marketing-B2B?</p>
                          <h5>Experience :8-13 years</h5>
                          <h5>Location:Jaipur/Coachi</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col" id='cardCol'>
                      <div className="card">
                        <div className="card-body">
                          <h3> LAD Software Solution PVT LTD.</h3>
                          <p> VP of marketing-B2B?</p>
                          <h5>Experience :8-13 years</h5>
                          <h5>Location:Jaipur/Coachi</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col" id='cardCol'>
                      <div className="card">
                        <div className="card-body">
                          <h3> LAD Software Solution PVT LTD.</h3>
                          <p> VP of marketing-B2B?</p>
                          <h5>Experience :8-13 years</h5>
                          <h5>Location:Jaipur/Coachi</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col" id='cardCol'>
                      <div className="card">
                        <div className="card-body">
                          <h3> LAD Software Solution PVT LTD.</h3>
                          <p> VP of marketing-B2B?</p>
                          <h5>Experience :8-13 years</h5>
                          <h5>Location:Jaipur/Coachi</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col" id='cardCol'>
                      <div className="card">
                        <div className="card-body">
                          <h3> LAD Software Solution PVT LTD.</h3>
                          <p> VP of marketing-B2B?</p>
                          <h5>Experience :8-13 years</h5>
                          <h5>Location:Jaipur/Coachi</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col" id='cardCol'>
                      <div className="card">
                        <div className="card-body">
                          <h3> LAD Software Solution PVT LTD.</h3>
                          <p> VP of marketing-B2B?</p>
                          <h5>Experience :8-13 years</h5>
                          <h5>Location:Jaipur/Coachi</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col" id='cardCol'>
                      <div className="card">
                        <div className="card-body">
                          <h3> LAD Software Solution PVT LTD.</h3>
                          <p> VP of marketing-B2B?</p>
                          <h5>Experience :8-13 years</h5>
                          <h5>Location:Jaipur/Coachi</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col" id='cardCol'>
                      <div className="card">
                        <div className="card-body">
                          <h3> LAD Software Solution PVT LTD.</h3>
                          <p> VP of marketing-B2B?</p>
                          <h5>Experience :8-13 years</h5>
                          <h5>Location:Jaipur/Coachi</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon btn" aria-hidden="true"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon btn" aria-hidden="true"></span>
              </button>
            </div>
          </div>



          {/* company Logo part  */}

          <h1 className="companyLogo">Select by Companies</h1>

          <div id="companyImage" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" id='imgBox'>
                <img src={"./images/tata.png"} alt="" />
                <img src={"./images/yashTech.jpg"} alt="" />
                <img src={"./images/SRM.jpg"} alt="" />
                <img src={"./images/wipro.jpg"} alt="" />
                <img src={"./images/quest.jpg"} alt="" />
                <img src={"./images/asg.png"} alt="" />
                <img src={"./images/harman.png"} alt="" />
              </div>
              <div className="carousel-item" id='imgBox'>
                <img src={"./images/tata.png"} alt="" />
                <img src={"./images/yashTech.jpg"} alt="" />
                <img src={"./images/SRM.jpg"} alt="" />
                <img src={"./images/wipro.jpg"} alt="" />
                <img src={"./images/quest.jpg"} alt="" />
                <img src={"./images/asg.png"} alt="" />
                <img src={"./images/harman.png"} alt="" />
              </div>
              <div className="carousel-item" id='imgBox'>
                <img src={"./images/tata.png"} alt="" />
                <img src={"./images/yashTech.jpg"} alt="" />
                <img src={"./images/SRM.jpg"} alt="" />
                <img src={"./images/wipro.jpg"} alt="" />
                <img src={"./images/quest.jpg"} alt="" />
                <img src={"./images/asg.png"} alt="" />
                <img src={"./images/harman.png"} alt="" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#companyImage" data-bs-slide="prev">
              <span className="carousel-control-prev-icon btn" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#companyImage" data-bs-slide="next">
              <span className="carousel-control-next-icon btn" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <h1 className="companyLogo">Career Tips</h1>
          <div className="tips">
            <div className="container px-4">
              <div className="row gx-5">
                <div className="col">
                  <div className="p-3  ">
                    <p className="bodyText"><span className="blurText">01</span> Ready to Work from Home? Here's how to leep calm and productive</p>
                    <p className="blurText">May,2020</p>
                  </div>
                </div>
                <div className="col">
                  <p className="bodyText"><span className="blurText">02</span> These best part time jobs do not require you to be a topper</p>
                  <p className="blurText">May,2020</p>
                </div>
              </div>
            </div>
            <div className="container px-4">
              <div className="row gx-5">
                <div className="col">
                  <div className="p-3  ">
                    <p className="bodyText"><span className="blurText">03</span> 8 Most popular part time jobs for Students</p>
                    <p className="blurText">May,2020</p>
                  </div>
                </div>
                <div className="col">
                  <p className="bodyText"><span className="blurText">04</span> 10 Best Skype Interview tips for job seekers who want to succeed</p>
                  <p className="blurText">May,2020</p>
                </div>
              </div>
            </div>
            <div className="container px-4">
              <div className="row gx-5">
                <div className="col">
                  <div className="p-3  ">
                    <p className="bodyText"><span className="blurText">05</span> Ready to Work from Home? Here's how to leep calm and productive</p>
                    <p className="blurText">May,2020</p>
                  </div>
                </div>
                <div className="col">
                  <p className="bodyText"><span className="blurText">06</span> Ready to Work from Home? Here's how to leep calm and productive</p>
                  <p className="blurText">May,2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
     

        <Footer />
      </>
    )
  
}
export default Home
