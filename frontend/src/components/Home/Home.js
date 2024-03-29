import React from "react";
import "./home.css";
import Footer from './Footer'

import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router";

import { useDispatch } from "react-redux";
import { authActions } from "../../store";
const Home = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [vals, setVal] = useState(true);

  const [login, getLogin] = useState({
    email: "",
    pwd: "",
  });
  const handleInput = (e) => {
    getLogin((r) => ({
      ...r,
      [e.target.name]: e.target.value,
    }));

    console.log(login);
  };
const[ide,setIde]=useState();
  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/user/signin", {
        email: login.email,
        pwd: login.pwd,
      })
      .catch((err) => console.log(err));

    const data = res.data;
    setIde(res)
    return data;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    sendRequest()
   
      .then(() => dispatch(authActions.login()))
      
      .then(() => history("/users"))
      
  };console.log(ide,"hola")
  return (
    <>
      {/* home body */}
      <div className="homeBody">
        <div className="row">
          <div className="col-sm-6">
            <div className="card logcard">
              <div className="card-body logogif">
                <img src="logo.gif" width="50%" padding="8px" />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  id="logoInput"
                  className="form-control"
                  placeholder="Skills"
                  aria-label="Username"
                />
                <input
                  type="text"
                  id="logoInput"
                  className="form-control"
                  placeholder="Location"
                  aria-label="Username"
                />
                <a href="/jobs">
                  <button type="button" id="logoInput" className="btn">
                    Find Jobs
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card" id="login">
              <div className="card-body">
                <form
                  id="login"
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                >
                  <div className="mb-3 logfc">
                    <div>
                      <h1>
                        LOGIN{" "}
                        <span>
                          <img src="./statfiles/login.png" className="icimg" />
                        </span>
                      </h1>
                    </div>{" "}
                    <br />
                    <label for="exampleInputEmail1" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={handleInput}
                      name="email"
                    />
                  </div>

                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="pwd"
                      onChange={handleInput}
                    />
                  </div>

                  <button type="submit" className="btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/*Hot jobs part starts from here */}

          <h1 className="HotJobs">Hot Jobs</h1>

          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col" id="cardCol">
                    <div className="card">
                      <div className="card-body jobcard">
                        <h3> LAD Software Solution PVT LTD.</h3>
                        <p> VP of marketing-B2B?</p>
                        <h5>Experience :8-13 years</h5>
                        <h5>Location:Jaipur/Coachi</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col" id="cardCol">
                    <div className="card">
                      <div className="card-body jobcard">
                        <h3> LAD Software Solution PVT LTD.</h3>
                        <p> VP of marketing-B2B?</p>
                        <h5>Experience :8-13 years</h5>
                        <h5>Location:Jaipur/Coachi</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col" id="cardCol">
                    <div className="card">
                      <div className="card-body jobcard">
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
                  <div className="col" id="cardCol">
                    <div className="card">
                      <div className="card-body jobcard">
                        <h3> LAD Software Solution PVT LTD.</h3>
                        <p> VP of marketing-B2B?</p>
                        <h5>Experience :8-13 years</h5>
                        <h5>Location:Jaipur/Coachi</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col" id="cardCol">
                    <div className="card">
                      <div className="card-body  jobcard">
                        <h3> LAD Software Solution PVT LTD.</h3>
                        <p> VP of marketing-B2B?</p>
                        <h5>Experience :8-13 years</h5>
                        <h5>Location:Jaipur/Coachi</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col" id="cardCol">
                    <div className="card">
                      <div className="card-body jobcard">
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
                  <div className="col" id="cardCol">
                    <div className="card ">
                      <div className="card-body jobcard">
                        <h3> LAD Software Solution PVT LTD.</h3>
                        <p> VP of marketing-B2B?</p>
                        <h5>Experience :8-13 years</h5>
                        <h5>Location:Jaipur/Coachi</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col" id="cardCol">
                    <div className="card">
                      <div className="card-body jobcard">
                        <h3> LAD Software Solution PVT LTD.</h3>
                        <p> VP of marketing-B2B?</p>
                        <h5>Experience :8-13 years</h5>
                        <h5>Location:Jaipur/Coachi</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col" id="cardCol">
                    <div className="card">
                      <div className="card-body jobcard">
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
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon btn"
                aria-hidden="true"
              ></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon btn"
                aria-hidden="true"
              ></span>
            </button>
          </div>
        </div>

        {/* company Logo part  */}

        <h1
          className="companyLogo"
          style={{
            marginBottom: "100px",
            backgroundColor: "rgb(25, 226, 158)",
            textAlign: "center",
            padding: "20px",
            textTransform: "uppercase",
          }}
        >
          Select by Companies
        </h1>

        <div
          id="companyImage"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" id="imgBox">
             <a href="/jobs"><img src={"./images/tata.png"} alt="" /></a> 
             <a href="/jobs"><img src={"./images/yashTech.jpg"} alt="" /></a> 
             <a href="/jobs"><img src={"./images/SRM.jpg"} alt="" /></a> 
             <a href=""> <img src={"./images/wipro.jpg"} alt="" /></a>
             <a href="/jobs"><img src={"./images/quest.jpg"} alt="" /></a> 
             <a href="/jobs" ><img src={"./images/asg.png"} alt="" /></a>
             <a href="/jobs" ><img src={"./images/harman.png"} alt="" /></a>
            </div>
            <div className="carousel-item" id="imgBox">
             <a href="/jobs" ><img src={"./images/tata.png"} alt="" /></a>
             <a href="/jobs" ><img src={"./images/yashTech.jpg"} alt="" /></a>
             <a href="" ></a><img src={"./images/SRM.jpg"} alt="" />
             <a href="" ></a><img src={"./images/wipro.jpg"} alt="" />
             <a href="" ></a><img src={"./images/quest.jpg"} alt="" />
             <a href="" ></a><img src={"./images/asg.png"} alt="" />
             <a href="" ></a><img src={"./images/harman.png"} alt="" />
            </div>
            <div className="carousel-item" id="imgBox">
             <a href="/jobs"><img src={"./images/tata.png"} alt="" /></a> 
             <a href="" ></a><img src={"./images/yashTech.jpg"} alt="" />
             <a href="/jobs" ></a><img src={"./images/SRM.jpg"} alt="" />
             <a href="" ></a><img src={"./images/wipro.jpg"} alt="" />
             <a href="" ><img src={"./images/quest.jpg"} alt="" /></a>
             <a href="" ><img src={"./images/asg.png"} alt="" /></a>
             <a href="" ><img src={"./images/harman.png"} alt="" /></a>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#companyImage"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon btn"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#companyImage"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon btn"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <h1
          className="companyLogo"
          style={{
            backgroundColor: "rgb(25, 226, 158)",
            textAlign: "center",
            padding: "20px",
            textTransform: "uppercase",
            marginTop: "100px",
          }}
        >
          Career Tips
        </h1>
        <div className="tips">
          <div className="container px-4">
            <div className="row gx-5">
              <div className="col">
                <div className="p-3  ">
                  <p className="bodyText">
                    <span className="blurText">01</span> Ready to Work from
                    Home? Here's how to leep calm and productive
                  </p>
                  <p className="blurText">May,2020</p>
                </div>
              </div>
              <div className="col">
                <p className="bodyText">
                  <span className="blurText">02</span> These best part time jobs
                  do not require you to be a topper
                </p>
                <p className="blurText">May,2020</p>
              </div>
            </div>
          </div>
          <div className="container px-4">
            <div className="row gx-5">
              <div className="col">
                <div className="p-3  ">
                  <p className="bodyText">
                    <span className="blurText">03</span> 8 Most popular part
                    time jobs for Students
                  </p>
                  <p className="blurText">May,2020</p>
                </div>
              </div>
              <div className="col">
                <p className="bodyText">
                  <span className="blurText">04</span> 10 Best Skype Interview
                  tips for job seekers who want to succeed
                </p>
                <p className="blurText">May,2020</p>
              </div>
            </div>
          </div>
          <div className="container px-4">
            <div className="row gx-5">
              <div className="col">
                <div className="p-3  ">
                  <p className="bodyText">
                    <span className="blurText">05</span> Ready to Work from
                    Home? Here's how to leep calm and productive
                  </p>
                  <p className="blurText">May,2020</p>
                </div>
              </div>
              <div className="col">
                <p className="bodyText">
                  <span className="blurText">06</span> Ready to Work from Home?
                  Here's how to leep calm and productive
                </p>
                <p className="blurText">May,2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default Home;
