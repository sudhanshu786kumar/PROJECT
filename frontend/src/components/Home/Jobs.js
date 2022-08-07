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
const filterBanglore = () => {

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
const filterNoida = () => {

  let filtered = jobs.filter(v => v.loc === 'Noida')

  setfilterdata(filtered)

}
const filterChennai = () => {

  let filtered = jobs.filter(v => v.loc === 'Noida')

  setfilterdata(filtered)

}



  return (
    <div>
     
 <div >
  <h1   className="location">Choose based on Location</h1>
      <input type='radio'  onClick={()=>filterBanglore()} />Banglore
     <input type='radio' onClick={()=>filterPune()}/>Pune
     <input type='radio' onClick={()=>filterHyder()}/>Hyderabad
     <input type='radio' onClick={()=>filterCoimb()}/>Coimbatore
     <input type='radio' onClick={()=>filterGurugram()}/>Gurugram
     <input type='radio' onClick={()=>filterNoida()}/>Noida
     <input type='radio' onClick={()=>filterChennai()}/>Chennai
</div>
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
