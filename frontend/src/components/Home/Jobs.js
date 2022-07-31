import React from 'react';
import axios from 'axios';
import Job from './Job';
import './home.css'
import  { useEffect, useState } from 'react';


const Jobs = () => {
    const fetchHandler=async()=>{
      return  await axios.get("http://localhost:5000/admin/data").then((res)=>res.data)
        }
    const[jobs,newval]=useState();

     useEffect(() => {
     fetchHandler().then((data)=>newval(data))
    },[])
   
    console.log(jobs)
  return (
    <div>
      <h1>JOBS</h1>
        <ul className='jobs'>
            {jobs && jobs.map((jobe,i)=>(
<li key={i}>
    <Job  Sook={jobe}/>
</li>
            ))}
        </ul> 
    </div>
  )
}

export default Jobs