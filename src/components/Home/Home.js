import React from 'react'
import Footer from './Footer'
import './home.css'


const Home = () => {
  return (
    <>

    {/* home body */}
    <div className='homeBody'>
    <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <img src="logo.png" width="100%" padding="10px"/>
      </div>
      <div class="input-group mb-3" >
            <input type="text" id="logoInput" class="form-control" placeholder="Skills" aria-label="Username"/>
            <input type="text" id="logoInput" class="form-control" placeholder="Location" aria-label="Username"/>
            <button type="button" id="logoInput" class="btn ">Find Jobs</button>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <form id="login">
  <div class="mb-3 " >
    <h1 class="d-flex justify-content-center">Login</h1>
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      </div>
    </div>
  </div>

  
  {/*Hot jobs part starts from here */}

<h1 className='HotJobs'>Hot Jobs</h1>
  
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col" id='cardCol'>
    <div class="card">
      <div class="card-body">
      <h3> LAD Software Solution PVT LTD.</h3>
        <p> VP of marketing-B2B?</p>
        <h5>Experience :8-13 years</h5>
        <h5>Location:Jaipur/Coachi</h5> 
      </div>
    </div>
  </div>
  <div class="col"id='cardCol'>
    <div class="card">
      <div class="card-body">
      <h3> LAD Software Solution PVT LTD.</h3>
        <p> VP of marketing-B2B?</p>
        <h5>Experience :8-13 years</h5>
        <h5>Location:Jaipur/Coachi</h5>     
     </div>
    </div>
  </div>
  <div class="col"id='cardCol'>
    <div class="card">
      <div class="card-body">
      <h3> LAD Software Solution PVT LTD.</h3>
        <p> VP of marketing-B2B?</p>
        <h5>Experience :8-13 years</h5>
        <h5>Location:Jaipur/Coachi</h5> 
      </div>
    </div>
  </div>
</div>
    </div>

    <div class="carousel-item">
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col"id='cardCol'>
    <div class="card">
      <div class="card-body">
      <h3> LAD Software Solution PVT LTD.</h3>
        <p> VP of marketing-B2B?</p>
        <h5>Experience :8-13 years</h5>
        <h5>Location:Jaipur/Coachi</h5> 
      </div>
    </div>
  </div>
  <div class="col"id='cardCol'>
    <div class="card">
      <div class="card-body">
      <h3> LAD Software Solution PVT LTD.</h3>
        <p> VP of marketing-B2B?</p>
        <h5>Experience :8-13 years</h5>
        <h5>Location:Jaipur/Coachi</h5>     
     </div>
    </div>
  </div>
  <div class="col"id='cardCol'>
    <div class="card">
      <div class="card-body">
      <h3> LAD Software Solution PVT LTD.</h3>
        <p> VP of marketing-B2B?</p>
        <h5>Experience :8-13 years</h5>
        <h5>Location:Jaipur/Coachi</h5> 
      </div>
    </div>
  </div>
</div>
    </div>

    <div class="carousel-item">
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col"id='cardCol'>
    <div class="card">
      <div class="card-body">
      <h3> LAD Software Solution PVT LTD.</h3>
        <p> VP of marketing-B2B?</p>
        <h5>Experience :8-13 years</h5>
        <h5>Location:Jaipur/Coachi</h5> 
      </div>
    </div>
  </div>
  <div class="col"id='cardCol'>
    <div class="card">
      <div class="card-body">
      <h3> LAD Software Solution PVT LTD.</h3>
        <p> VP of marketing-B2B?</p>
        <h5>Experience :8-13 years</h5>
        <h5>Location:Jaipur/Coachi</h5>     
     </div>
    </div>
  </div>
  <div class="col"id='cardCol'>
    <div class="card">
      <div class="card-body">
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
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon btn" aria-hidden="true"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon btn" aria-hidden="true"></span>
  </button>
</div>
</div>



{/* company Logo part  */}

<h1 className="companyLogo">Select by Companies</h1>

<div id="companyImage" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" id='imgBox'>
    <img src={"./images/tata.png"} alt="" />
    <img src={"./images/yashTech.jpg"} alt="" />
    <img src={"./images/SRM.jpg"} alt="" />
    <img src={"./images/wipro.jpg"} alt="" />
    <img src={"./images/quest.jpg"} alt="" />
    <img src={"./images/asg.png"} alt="" />
    <img src={"./images/harman.png"} alt="" />
    </div>
    <div class="carousel-item" id='imgBox'>
    <img src={"./images/tata.png"} alt="" />
    <img src={"./images/yashTech.jpg"} alt="" />
    <img src={"./images/SRM.jpg"} alt="" />
    <img src={"./images/wipro.jpg"} alt="" />
    <img src={"./images/quest.jpg"} alt="" />
    <img src={"./images/asg.png"} alt="" />
    <img src={"./images/harman.png"} alt="" />
    </div>
    <div class="carousel-item" id='imgBox'>
    <img src={"./images/tata.png"} alt="" />
    <img src={"./images/yashTech.jpg"} alt="" />
    <img src={"./images/SRM.jpg"} alt="" />
    <img src={"./images/wipro.jpg"} alt="" />
    <img src={"./images/quest.jpg"} alt="" />
    <img src={"./images/asg.png"} alt="" />
    <img src={"./images/harman.png"} alt="" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#companyImage" data-bs-slide="prev">
    <span class="carousel-control-prev-icon btn" aria-hidden="true"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#companyImage" data-bs-slide="next">
    <span class="carousel-control-next-icon btn" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<h1 className="companyLogo">Career Tips</h1>
<div className="tips">
<div class="container px-4">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3  ">
      <p className="bodyText"><span className="blurText">01</span> Ready to Work from Home? Here's how to leep calm and productive</p>
     <p className="blurText">May,2020</p>
     </div>
    </div>
    <div class="col">
    <p className="bodyText"><span className="blurText">02</span> These best part time jobs do not require you to be a topper</p>
     <p className="blurText">May,2020</p>
    </div>
  </div>
</div>
<div class="container px-4">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3  ">
      <p className="bodyText"><span className="blurText">03</span> 8 Most popular part time jobs for Students</p>
     <p className="blurText">May,2020</p>
     </div>
    </div>
    <div class="col">
    <p className="bodyText"><span className="blurText">04</span> 10 Best Skype Interview tips for job seekers who want to succeed</p>
     <p className="blurText">May,2020</p>
    </div>
  </div>
</div>
<div class="container px-4">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3  ">
      <p className="bodyText"><span className="blurText">05</span> Ready to Work from Home? Here's how to leep calm and productive</p>
     <p className="blurText">May,2020</p>
     </div>
    </div>
    <div class="col">
    <p className="bodyText"><span className="blurText">06</span> Ready to Work from Home? Here's how to leep calm and productive</p>
     <p className="blurText">May,2020</p>
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