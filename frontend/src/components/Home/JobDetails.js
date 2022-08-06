import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";


const JobDetails = () => {
  const id = useParams().id;
  console.log(id);

  const fetchHandler = async () => {
    return await axios
      .get(`http://localhost:5000/admin/job/${id}`)
      .then((res) => res.data);
  };
  const [jobs, newval] = useState([]);
  const [apply, setApply] = useState(false);
  const handleApply=()=>{
    setApply(true)
  }
  useEffect(() => {
    fetchHandler().then((d) => newval(d));
  }, [id]);

  console.log(jobs.jobtitle);
  return (
    <>
    
      <div className="jobdetail">
        <h3>{jobs.jobtitle}</h3>
        <div>
          <ul>
            <li>{jobs.exp}</li>
            <li>{jobs.salary}</li>
            <li>{jobs.loc}</li>
          </ul>
        </div>
        <div>
          
          <p>
            <strong>
              <u>Job Role:{jobs.role}</u>
            </strong>
          </p>
          <p>
            <b>
              <u>Job Location:</u>
            </b>
            {jobs.loc}
          </p>
        </div>
        <div>
          <h4>
            <u>About Company:</u>
          </h4>
          <p>{jobs.compinfo}</p>
        </div>
        <div>
          <p>
            <b>
              <u>Responsibilities:</u>
            </b>
          </p>
          <p>{jobs.resp}</p>
        </div>
        <div>
          <p>
            <b>
              <u>skills and Qualification:</u>
            </b>
          </p>
          <p>{jobs.skills}</p>
        </div>
        <div>
          <p>
            <b>Role</b>: {jobs.role}
          </p>
          <p>
            <b>Industry type</b>: {jobs.industry}
          </p>
          <p>
            <b>employment type</b>: {jobs.emptype}
          </p>
          <p>
            <b>knowledge Required</b>: {jobs.keyword}
          </p>
        </div>
        <div>
          <p>
            <b>
              <u>Job Description</u>
            </b>
          </p>
        </div>
        <div>
          <p>{jobs.jobdesc}</p>
        </div>
        <div>
          <button className="btn" onClick={handleApply}>Apply for job</button>
        </div>
        {
apply ? (
<div class="alert alert-success" role="alert">
              Thank you for Applying !!
            </div>
):(
<></>
)
        }
      </div>
    </>
  );
};

export default JobDetails;
