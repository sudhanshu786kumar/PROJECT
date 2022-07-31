import React from 'react'
import axios from 'axios';
import{useEffect,useState} from 'react';
import "./user.css";
import { Link } from 'react-router-dom';
let firstRender = true;
axios.defaults.withCredentials=true;

const Detail = () => {

    const [user, setUser] = useState()
    const [emp, setemp] = useState();



    const refreshToken = async () => {
      const res = await axios
        .get("http://localhost:5000/user/refresh", {
          withCredentials: true,
        })
        .catch((err) => console.log(err));
  
      const data = await res.data;
      return data;
    };








    const sendRequest=async()=>{
        const res=await  axios.get("http://localhost:5000/user/veri",{
            withCredentials:true
        }).catch(err=>console.log(err))
        const data = await res.data
        return data
    }


    useEffect(() => {
      if (firstRender) {
        firstRender = false;
        sendRequest().then((data) => setUser(data.user));
      }
      let interval = setInterval(() => {
        refreshToken().then((data) => setUser(data.user));
      }, 1000 * 29);
      return () => clearInterval(interval);
    }, []);

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
          <li> NAME: {user.name}</li>  
          <li>EMAIL: {user.email}</li>
          <li>ADDRESS: {user.addr1} , {user.addr2}</li>
      
          <li>MOBILE: {user.mobile}</li>
          <li>CITY: {user.city}</li>
          <li>PIN: {user.postal}</li>
          <li>Country: {user.country}</li>
          <li>WORK-YEAR : {user.worky}</li>
          <li>WORK_MONTH: {user.workm}</li>
          <li>SKILLS: {user.Pskills}</li>
         <li>RESUME : <a href={user.resume}>Resume</a></li>
         <li><button className='btn btn-success' ><a href={`/personal/${user._id}`} >Edit</a></button></li>
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
          <li>COLLEGE-NAME: {user.collegeName}</li>  
          <li>GRADUATION-YEAR: {user.gradYear}</li>
          <li>GRADUATED: {user.graduated}</li>
          <li>SCHOOL-NAME: {user.schoolName}</li>
          <li>SCHOOL-YEAR:{user.schoolYear}</li>
          <li>SKILLS: {user.skills}</li>
          <li>CERTIFICATION: {user.certification}</li>
       
        
       
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
          <li>CURRENT-EMPLOYEE:{user.currEmployee}</li>  
          <li>DESTINATION: {user.destination}</li>
          <li>DESCRIPTION1: {user.description1}</li>
          <li>MONTH-EXPERIENCE: {user.monthExp1}</li>
          <li>PREVIOUS-EMPLOYEE: {user.prevEmployee}</li>
          <li>DESCRITION: {user.description2}</li>
          <li>MONTH-EXPERIENCE2: {user. monthExp2}</li>
       
        
       
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