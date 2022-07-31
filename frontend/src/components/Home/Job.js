import React from 'react'


import { Link, useNavigate } from 'react-router-dom';
const Job = (props) => {
    const{_id,jobid, jobtitle,
        date, role, resp, compname,
         exp, salary, loc, skills, deg, compinfo, emptype,
          industry, keyword, jobdesc}=props.Sook;
  return (
    <div >
        <ul>
        <li>{jobid}</li>
        <li>{jobtitle}</li>
        <li>{date}</li>
        <li>{jobtitle}</li>
        
        <li>{role}</li>
        <li>{resp}</li>
        <li>{compname}</li>
        <li>{exp}</li>
        <li>{salary}</li>
        <li>{loc}</li>
        <li>{skills}</li>
        <li>{deg}</li>
        <li>{compinfo}</li>
        <li>{emptype}</li>
        <li>{industry}</li>
        <li>{keyword}</li>
        <li>{jobdesc}</li>
    
        </ul>
        </div>

  )
}

export default Job