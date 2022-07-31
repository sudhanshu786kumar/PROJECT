import React from "react";

import { Link, useNavigate } from "react-router-dom";

const Job = (props) => {
  const {
    _id,
    jobid,
    jobtitle,
    date,
    role,
    resp,
    compname,
    exp,
    salary,
    loc,
    skills,
    deg,
    compinfo,
    emptype,
    industry,
    keyword,
    jobdesc,
  } = props.Sook;
  return (
    <div>
      <div class="card" id="jobcard" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">Job Title:{jobtitle}</h5>
          <p class="card-text">
            A student from any discipline can apply for this recuitment.
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Date posted on:{date}</li>
          <li class="list-group-item">Role: {role}</li>
          <li class="list-group-item">Responsibility: {resp}</li>
          <li class="list-group-item">Company Name: {compname}</li>
          <li class="list-group-item">experience: {exp}</li>
          <li class="list-group-item">Salaray: {salary}</li>
          <li class="list-group-item">Location: {loc}</li>
          <li class="list-group-item">Skills: {skills}</li>
          <li class="list-group-item">Degree: {deg}</li>
          <li class="list-group-item">company Info: {compinfo}</li>
          <li class="list-group-item">Employement Type: {emptype}</li>
          <li class="list-group-item">Industry Type: {industry}</li>
          <li class="list-group-item">keyword: {keyword}</li>
          <li class="list-group-item">Job Description: {jobdesc}</li>
        </ul>
        <div class="card-body">
          <a href={`/job/JobDetails/${_id}`} class="card-link">
            Show Job Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Job;
