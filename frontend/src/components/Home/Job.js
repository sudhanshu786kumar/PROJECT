import React from "react";
const Job = (props) => {
  const {
    _id,
    jobtitle,
    compname,
    exp,
    salary,
    loc,
    deg,
    keyword,
 
  } = props.Sook;
  console.log(props.Sook.loc)
  
  return (
    <div>
      <div class="card" id="jobcard" style={{ width: "18rem" }}>
        <div class="card-body" id="jobcardsm">
          <h5 class="card-title">Job Title:{jobtitle}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Company Name: {compname}</li>
          <li class="list-group-item">experience: {exp}</li>
          <li class="list-group-item">Salaray: {salary}</li>
          <li class="list-group-item">Location: {loc}</li>
          <li class="list-group-item">Degree: {deg}</li>
          <li class="list-group-item">keyword: {keyword}</li>
        </ul>
        <div class="card-body">
          <a href={`/detail/${_id}`} class="card-link">
            Show Job Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Job;
