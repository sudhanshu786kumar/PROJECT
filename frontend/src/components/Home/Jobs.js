import React from "react";
import axios from "axios";
import Job from "./Job";
import Search from "./Search";
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
    .then((data) => newval(data))
  

  
  },

  []);
let loc="Noida"
const rdata=()=>{
console.log(jobs[0],"hu")
}
rdata()
console.log(filterdata)

  return (
    <div>
      <Search />
      <h1>JOBS</h1>
      <div id="jobcards">
        <ul className="jobs">
        {
          jobs && jobs.map((jobe,i)=>(

            <li key={i}>
<Job Sook={jobe}/>
            </li>
          ))
        }
        </ul>
      </div>
    </div>
  );
};

export default Jobs;
