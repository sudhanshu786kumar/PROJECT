import React from "react";
import axios from "axios";
import Job from "./Job";

import "./home.css";
import { useEffect, useState } from "react";

const Jobs = () => {
 
  const fetchHandler = async () => {
    return await axios
      .get("http://localhost:5000/admin/data")
      .then((res) => res.data);
  };

  const [jobs, newval] = useState([]);

  let [filterdata, setfilterdata] = useState();

  useEffect(() => {
    fetchHandler()
    .then((data)=>newval(data))
 
    .catch(Error)

    
  },
[]);
useEffect(()=>{
setfilterdata(jobs)
},[jobs])


const filterPune = (e) => {

  let filtered = jobs.filter(v => v.loc === 'Pune')
  setfilterdata(filtered)
  
 

}
const filterBang = () => {

  let filtered = jobs.filter(v => v.loc === 'Banglore')

  setfilterdata(filtered)

}
const filterHyder = () => {

  let filtered = jobs.filter(v => v.loc === 'Hyderabad')

  setfilterdata(filtered)

}
const filterCoimb = () => {

  let filtered = jobs.filter(v => v.loc === 'Coimbatore')

  setfilterdata(filtered)

}
const filterGurugram = () => {

  let filtered = jobs.filter(v => v.loc === 'Gurugram')

  setfilterdata(filtered)

}




  return (
    <div>
      <div>
        <option>
        <optio type='radio'  onClick={()=>filterPune()}/>Pune
     <select type='radio' onClick={()=>filterBang()}/>Banglore
     <select type='radio' onClick={()=>filterHyder()}/>Hyderabad
     <select type='radio' onClick={()=>filterCoimb()}/>Coimbatore
     <select type='radio' onClick={()=>filterGurugram()}/>Gurugram</option> </div>
    
 
     {/* <select type='radio' onClick={()=>filterBanglore()}/>
     <select type='radio' onClick={()=>filterFantacy()}/>
     <select type='radio' onClick={()=>filterFantacy()}/>
     <select type='radio' onClick={()=>filterFantacy()}/>
     <select type='radio' onClick={()=>filterFantacy()}/>
     <select type='radio' onClick={()=>filterFantacy()}/> */}
      <h1>JOBS</h1>
      
      <div id="jobcards">
        <ul className="jobs">
        {
        filterdata &&
          filterdata.map((obj, index) =>
          <li key={index}>
           <Job Sook={obj}/>

          </li>) }
        </ul>
      </div>
    </div>
  );
};

export default Jobs;
