import React from 'react'
import Footer from './Footer'
import './home.css';



const Home = () => {
  return (
    <>

    {/* home body */}
    <div classNameName='homeBody'>
    <div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
      <img src="logo.png" width="100%" padding="10px"/>
      </div>
      <div className="input-group mb-3" >
            <input type="text" id="logoInput" className="form-control" placeholder="Skills" aria-label="Username"/>
            <input type="text" id="logoInput" className="form-control" placeholder="Location" aria-label="Username"/>
            <button type="button" id="logoInput" className="btn ">Find Jobs</button>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card" id='login'>
      <div className="card-body">
      <form id="login">
  <div className="mb-3 " >
    <h1 className="d-flex justify-content-center">Login</h1>
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email'/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='pwd'/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
      </div>
    </div>
  </div>

  
  {/*Hot jobs part starts from here */}

<h1 classNameName='HotJobs'>Hot Jobs</h1>
  
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
  <div className="col"id='cardCol'>
    <div className="card">
      <div className="card-body">
      <h3> LAD Software Solution PVT LTD.</h3>
        <p> VP of marketing-B2B?</p>
        <h5>Experience :8-13 years</h5>
        <h5>Location:Jaipur/Coachi</h5>     
     </div>
    </div>
  </div>
  <div className="col"id='cardCol'>
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
  <div className="col"id='cardCol'>
    <div className="card">
      <div className="card-body">
      <h3> LAD Software Solution PVT LTD.</h3>
        <p> VP of marketing-B2B?</p>
        <h5>Experience :8-13 years</h5>
        <h5>Location:Jaipur/Coachi</h5> 
      </div>
    </div>
  </div>
  <div className="col"id='cardCol'>
    <div className="card">
      <div className="card-body">
      <h3> LAD Software Solution PVT LTD.</h3>
        <p> VP of marketing-B2B?</p>
        <h5>Experience :8-13 years</h5>
        <h5>Location:Jaipur/Coachi</h5>     
     </div>
    </div>
  </div>
  <div className="col"id='cardCol'>
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
  <div className="col"id='cardCol'>
    <div className="card">
      <div className="card-body">
      <h3> LAD Software Solution PVT LTD.</h3>
        <p> VP of marketing-B2B?</p>
        <h5>Experience :8-13 years</h5>
        <h5>Location:Jaipur/Coachi</h5> 
      </div>
    </div>
  </div>
  <div className="col"id='cardCol'>
    <div className="card">
      <div className="card-body">
      <h3> LAD Software Solution PVT LTD.</h3>
        <p> VP of marketing-B2B?</p>
        <h5>Experience :8-13 years</h5>
        <h5>Location:Jaipur/Coachi</h5>     
     </div>
    </div>
  </div>
  <div className="col"id='cardCol'>
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

<h1 classNameName="companyLogo">Select by Companies</h1>

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

<h1 classNameName="companyLogo">Career Tips</h1>
<div classNameName="tips">
<div className="container px-4">
  <div className="row gx-5">
    <div className="col">
     <div className="p-3  ">
      <p classNameName="bodyText"><span classNameName="blurText">01</span> Ready to Work from Home? Here's how to leep calm and productive</p>
     <p classNameName="blurText">May,2020</p>
     </div>
    </div>
    <div className="col">
    <p classNameName="bodyText"><span classNameName="blurText">02</span> These best part time jobs do not require you to be a topper</p>
     <p classNameName="blurText">May,2020</p>
    </div>
  </div>
</div>
<div className="container px-4">
  <div className="row gx-5">
    <div className="col">
     <div className="p-3  ">
      <p classNameName="bodyText"><span classNameName="blurText">03</span> 8 Most popular part time jobs for Students</p>
     <p classNameName="blurText">May,2020</p>
     </div>
    </div>
    <div className="col">
    <p classNameName="bodyText"><span classNameName="blurText">04</span> 10 Best Skype Interview tips for job seekers who want to succeed</p>
     <p classNameName="blurText">May,2020</p>
    </div>
  </div>
</div>
<div className="container px-4">
  <div className="row gx-5">
    <div className="col">
     <div className="p-3  ">
      <p classNameName="bodyText"><span classNameName="blurText">05</span> Ready to Work from Home? Here's how to leep calm and productive</p>
     <p classNameName="blurText">May,2020</p>
     </div>
    </div>
    <div className="col">
    <p classNameName="bodyText"><span classNameName="blurText">06</span> Ready to Work from Home? Here's how to leep calm and productive</p>
     <p classNameName="blurText">May,2020</p>
    </div>
  </div>
</div>
</div>
    </div>


    <Footer/>
    </>
  )
}

export default Home