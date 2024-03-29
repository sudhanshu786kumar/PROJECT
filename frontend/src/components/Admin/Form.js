import React from "react";
import { useState } from "react";
import "../User/user.css";
import axios from "axios";
const Form = () => {
  const [blo, setblo] = useState(false);
  const initialValues = {
    jobid: "",
    jobtitle: "",
    date: "",
    role: "",
    resp: "",
    compname: "",
    exp: "",
    salary: "",
    pos: "",
    loc: "",
    skills: "",
    deg: "",
    compinfo: "",
    emptype: "",
    industry: "",
    keyword: "",
    jobdesc: "",
  };

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/admin/data", {
        jobid: formValues.jobid,
        jobtitle: formValues.jobtitle,
        date: formValues.date,
        role: formValues.role,
        resp: formValues.resp,
        compname: formValues.compname,
        exp: formValues.exp,
        salary: formValues.salary,
        pos: formValues.pos,
        loc: formValues.loc,
        skills: formValues.skills,
        deg: formValues.deg,
        compinfo: formValues.compinfo,
        emptype: formValues.emptype,
        industry: formValues.industry,
        keyword: formValues.keyword,
        jobdesc: formValues.jobdesc,
      })
      .catch((err) => console.log(err));

    const data = res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    sendRequest().then(setblo(true));
  };

  const [formValues, setFormValues] = useState(initialValues);
  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <form
          id="registrationForm"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <h1>Admin | Employer Post Jobs</h1>
          <div class="mb-3">
            <label for="RegistrationName" class="form-label">
              Job Id
            </label>
            <input
              type="number"
              name="jobid"
              class="form-control"
              id="RegistrationName"
              aria-describedby="emailHelp"
              value={formValues.jobid}
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="RegistrationEmail" class="form-label">
              Job Title
            </label>
            <input
              type="text"
              name="jobtitle"
              class="form-control"
              id="RegistrationEmail"
              value={formValues.jobtitle}
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="RegistraionPassword" class="form-label">
              Job Posted Date
            </label>
            <input
              type="date"
              name="date"
              class="form-control"
              id="RegistraionPassword"
              value={formValues.date}
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="RegistraionMobile" class="form-label">
              Role
            </label>
            <input
              type="text"
              name="role"
              class="form-control"
              id="RegistraionMobile"
              value={formValues.role}
              onChange={handleChange}
            />
          </div>
          <div class="col-12">
            <label for="RegistrationAddress" class="form-label">
              Responsibility
            </label>
            <textarea
              type="text"
              name="resp"
              class="form-control"
              id="RegistrationAddress"
              style={{ width: "700px" }}
              value={formValues.resp}
              onChange={handleChange}
            />
          </div>
          <div class="col-12">
            <label for="RegistrationAddress2" class="form-label">
              Company Name
            </label>
            <input
              type="text"
              name="compname"
              class="form-control"
              id="RegistrationAddress2"
              value={formValues.compname}
              onChange={handleChange}
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              Experience
            </label>
            <input
              type="text"
              name="exp"
              class="form-control"
              id="inputCity"
              style={{ width: "700px" }}
              value={formValues.exp}
              onChange={handleChange}
            />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              salary Range
            </label>
            <input
              type="text"
              name="salary"
              class="form-control"
              id="inputState"
              style={{ width: "700px" }}
              value={formValues.salary}
              onChange={handleChange}
            />
          </div>
          <div class="col-md-4">
            <label for="inputCountry" class="form-label">
              No of Position
            </label>
            <input
              type="number"
              name="pos"
              class="form-control"
              id="inputCountry"
              style={{ width: "700px" }}
              value={formValues.pos}
              onChange={handleChange}
            />
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              Loaction
            </label>
            <input
              type="text"
              name="loc"
              class="form-control"
              id="inputZip"
              style={{ width: "700px" }}
              value={formValues.loc}
              onChange={handleChange}
            />
          </div>
          <div class="col-md-6">
            <label for="experience" class="form-label">
              Skills and Qualification
            </label>
            <textarea
              type="text"
              name="skills"
              class="form-control"
              style={{ width: "700px" }}
              value={formValues.skills}
              onChange={handleChange}
            />
          </div>
          <div class="col-12">
            <label for="RegistrationSkills" class="form-label">
              Degree
            </label>
            <input
              type="text"
              name="deg"
              class="form-control"
              id="RegistrationSkills"
              value={formValues.deg}
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="Resume" class="form-label">
              Company Info
            </label>
            <textarea
              class="form-control"
              name="compinfo"
              type="text"
              id="Resume"
              style={{ width: "700px" }}
              value={formValues.compinfo}
              onChange={handleChange}
            />
          </div>
          <div class="col-12">
            <label for="RegistrationSkills" class="form-label">
              Employment Type
            </label>
            <input
              type="text"
              name="emptype"
              class="form-control"
              id="RegistrationSkills"
              value={formValues.emptype}
              onChange={handleChange}
            />
          </div>
          <div class="col-12">
            <label for="RegistrationSkills" class="form-label">
              Industry Type
            </label>
            <input
              type="text"
              name="industry"
              class="form-control"
              id="RegistrationSkills"
              value={formValues.industry}
              onChange={handleChange}
            />
          </div>
          <div class="col-12">
            <label for="RegistrationSkills" class="form-label">
              search keyword
            </label>
            <input
              type="text"
              name="keyword"
              class="form-control"
              id="RegistrationSkills"
              value={formValues.keyword}
              onChange={handleChange}
            />
          </div>
          <div class="col-12">
            <label for="RegistrationSkills" class="form-label">
              Job Description
            </label>
            <textarea
              type="text"
              name="jobdesc"
              class="form-control"
              id="RegistrationSkills"
              style={{ width: "700px" }}
              value={formValues.jobdesc}
              onChange={handleChange}
            />
          </div>
          <button type="submit" class="btn">
            save
          </button>
        </form>
      </div>
      {blo && <h1>posted !!</h1>}
    </>
  );
};

export default Form;
