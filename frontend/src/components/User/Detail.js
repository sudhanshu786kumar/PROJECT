import React from 'react'
import axios from 'axios';
import{useEffect,useState} from 'react';
import "./user.css";
import { Link } from 'react-router-dom';

axios.defaults.withCredentials=true;

const Detail = () => {

    const [user, setUser] = useState()
    const [emp, setemp] = useState()
    const sendRequest=async()=>{
        const res=await  axios.get("http://localhost:5000/user/veri",{
            withCredentials:true
        }).catch(err=>console.log(err))
        const data = await res.data
        return data
    }



useEffect(() => {
  sendRequest().then((data)=>setUser(data.user))

  
}, [])

const[pers,setpers]=useState(false)
  return (
    <div style={{padding:"20px",height:"100vh"}}>
       
{user &&
<>

<div style={{textAlign:"center",backgroundColor:""}}><h1>Hello {user.name} !<img style={{maxWidth:"100px",borderRadius:"80px"}} src="https://source.unsplash.com/1600x900/?boy"/></h1></div>
<div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Personal Details
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <ul>
          <li>{user.name}</li>  
          <li>{user.email}</li>
          <li>{user.addr1}</li>
          <li>{user.addr2}</li>
          <li>{user.mobile}</li>
          <li>{user.city}</li>
          <li>{user.postal}</li>
          <li>{user.country}</li>
          <li>{user.worky}</li>
          <li>{user.workm}</li>
          <li>{user.Pskills}</li>
         <li><a href={user.resume}>Resume</a></li>
         <li><button className='btn btn-success'><a >Edit</a></button></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Education Details
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
      <ul>
          <li>{user.collegeName}</li>  
          <li>{user.gradYear}</li>
          <li>{user.graduated}</li>
          <li>{user.schoolName}</li>
          <li>{user.schoolYear}</li>
          <li>{user.skills}</li>
          <li>{user.certification}</li>
       
        
       
        </ul>
        <Link to={`/education/${user._id}`}><button className='btn btn-success'>Edit</button></Link>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Employement Details
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
      <ul>
          <li>{user.currEmployee}</li>  
          <li>{user.destination}</li>
          <li>{user.description1}</li>
          <li>{user.monthExp1}</li>
          <li>{user.prevEmployee}</li>
          <li>{user.description2}</li>
          <li>{user. monthExp2}</li>
       
        
       
        </ul>
      <Link to={`/employment/${user._id}`}><button className='btn btn-success'>Edit</button></Link>
      </div>
    </div>
  </div>
</div>

</>
}
    </div>
  )
}

export default Detail