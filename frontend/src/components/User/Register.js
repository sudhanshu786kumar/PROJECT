import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router';
import './user.css'
const Register = () => {
  const history=useNavigate();
const[val,setVal]=useState(false);
  const [input, setInput] = useState({
    name:'',
    email: '',
    pwd:'',
    mobile:'',
    addr1:'',
    addr2:'',
    city:'',
    postal:'',
    country:'',
    worky:'',
    workm:'',
    Pskills:'',
    resume:''
 

  
  })

  const HandleSubmit = (e) => {
    e.preventDefault();
    handlePost()
    .then(setVal(true)).then(
      setTimeout(history("/"),8000)
    )
    

    
  
  }
  const handlePost = async () => {
    const formData=new FormData();
   
    formData.append('name',input.name);
    formData.append('email',input.email);
    formData.append('pwd',input.pwd);
    formData.append('mobile',input.mobile);
    formData.append('addr1',input.addr1);
    formData.append('addr2',input.addr2)
    formData.append('city',input.city);
    formData.append('postal',input.postal);
    formData.append('country',input.country)
    formData.append('worky',input.worky);
    formData.append('workm',input.workm);
    formData.append('Pskills',input.Pskills)
    formData.append('resume',input.resume)
  
    let res=await axios.post('http://localhost:5000/user/signup', formData).then(res => res.data)

    const data=await res.data
    return data
  }
  const handleChange = (e) => {
    setInput((pval) => (
      {
        ...pval,
        [e.target.name]: e.target.value
      }
    ))
    
  }

  const handlePhoto=(e)=>{
    setInput({...input,resume:e.target.files[0]}
    
  )
  console.log(e.target.files[0])
    }  
    console.log(input)
  return (
    <div>
      
      <div className="d-flex justify-content-center" >
    <form id='registrationForm' onSubmit={HandleSubmit} encType="multipart/form-data">
      <h1>Register Now</h1>
    <div class="mb-3">
    <label for="RegistrationName" class="form-label">Name</label>
    <input type="username"name='name' class="form-control" id="RegistrationName" aria-describedby="emailHelp"value={input.username} onChange={handleChange}/>
  </div>
  <div class="mb-3">
    <label for="RegistrationEmail" class="form-label">Email address</label>
    <input type="email" name='email' class="form-control" id="RegistrationEmail" aria-describedby="emailHelp"value={input.email} onChange={handleChange}/>
  </div>
  <div class="mb-3">
    <label for="RegistraionPassword" class="form-label">Password</label>
    <input type="password" name='pwd' class="form-control" id="RegistraionPassword"value={input.password} onChange={handleChange}/>
  </div>
  <div class="mb-3">
    <label for="RegistraionMobile" class="form-label">Mobile Number</label>
    <input type="number" name='mobile' class="form-control" id="RegistraionMobile"value={input.mobileNumber} onChange={handleChange}/>
  </div>
  <div class="col-12">
    <label for="RegistrationAddress" class="form-label">Address</label>
    <input type="text" name='addr1' class="form-control" id="RegistrationAddress" placeholder="House no."value={input.RegistrationAddress} onChange={handleChange}/>
  </div>
  <div class="col-12">
    <label for="RegistrationAddress2" class="form-label">Address 2</label>
    <input type="text" name='addr2' class="form-control" id="RegistrationAddress2" placeholder="Apartment, studio, or floor" value={input.RegistrationAddress2} onChange={handleChange}/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" name='city' class="form-control" id="inputCity" value={input.inputCity} onChange={handleChange}/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <input type="text" name='postal' class="form-control" id="inputState" value={input.inputState} onChange={handleChange}/>
  </div>
  <div class="col-md-4">
    <label for="inputCountry" class="form-label">Country</label>
    <input type="text" name='country' class="form-control" id="inputCountry" value={input.inputCountry} onChange={handleChange}/>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="number" name='postal' class="form-control" id="inputZip" value={input.inputZip} onChange={handleChange}/>
  </div>
  <div class="col-md-6">
    <label for="experience" class="form-label">Total Experience</label>
    <input type="number" name='worky' class="form-control" id="experience" placeholder='Years' value={input.experienceYear} onChange={handleChange}/><br />
    <input type="number" name='workm' class="form-control" id="experience"placeholder='Months' value={input.experienceMonth} onChange={handleChange}/>
  </div>
  <div class="col-12">
    <label for="RegistrationSkills" class="form-label">skills</label>
    <input type="text" name='Pskills' class="form-control" id="RegistrationSkills" placeholder="Enter skills"value={input.RegistrationSkills} onChange={handleChange}/>
  </div>
  <div class="mb-3">
  <label for="Resume" class="form-label">Upload Resume</label>
  <input class="form-control" name='resume' type="file" id="Resume" placeholder="Upload file" value={input.Resume} onChange={handlePhoto}/>
</div>
  <button type="submit" class="btn">Submit</button>
  {
  val?(
<div class="alert alert-success" role="alert">
 Thank you for submission!
</div>
  ):(
<div class="alert alert-danger" role="alert">
  fill out the form!
</div>
  )
}
</form>
    </div>

    </div>
  )
}

export default Register