import React from 'react'

const Form = () => {
  return (
    <div><h1>Admin | Employer Post Jobs</h1>
    <div className='adminform' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
<div>
<p>Job id</p>
<p>Job Title</p>
<p>Job Posted Date</p>
<p>Role</p>
<p>Responsibilities</p>
<p>Company Name</p>
<p>Salary Range</p>
<p>Number of Position</p>
<p>Location</p>
<p>Skills &  Qualification</p>
<p>Degree</p>
<p>Company Info</p>
<p>Employement type</p>
<p>Industry type</p>
<p>Search keyword</p>
<p>Job Description</p>


</div>
<div style={{display:'flex',flexDirection:'column',alignContent:'center',justifyContent:'center'}}>
<input type="text" name="jobid" placeholder=''/>
<input type="text" name="jobtitle" placeholder=''/>
<input type="text" name="date" placeholder=''/>
<input type="text" name="role" placeholder=''/>
<input type="text" name="resp" placeholder=''/>
<input type="text" name="compname" placeholder=''/>
<input type="text" name="exp" placeholder=''/>
<input type="text" name="salary" placeholder=''/>
<input type="text" name="pos" placeholder=''/>
<input type="text" name="loc" placeholder=''/>
<input type="text" name="skills" placeholder=''/>
<input type="text" name="deg" placeholder=''/>
<input type="text" name="compinfo" placeholder=''/>
<input type="text" name="emptype" placeholder=''/>
<input type="text" name="industry" placeholder=''/>
<input type="text" name="keyword" placeholder=''/>
<input type="text" name="jobdesc" placeholder=''/>
</div>

    </div>
    
    </div>
  )
}

export default Form