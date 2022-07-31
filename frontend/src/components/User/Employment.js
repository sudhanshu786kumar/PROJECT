import React from "react";
import { useState } from "react";
import "./user.css";
import axios from 'axios'
import {useParams} from 'react-router'
const Employment = () => {
  const initialValues = {
    currEmployee: "",
    destination: "",
    description1: "",
    monthExp1: "",
    prevEmployee: "",
    description2: "",
    monthExp2: "",
  };
  const id = useParams().id;
  console.log(id)
  const [formValues, setFormValues] = useState(initialValues);
  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    handlePost().then(console.log("done"))
    
  }
  const handlePost = async () => {

   
   
    
  
    try{let res=await axios.put(`http://localhost:5000/user/signup/employe/${id}`, {
      currEmployee:formValues.currEmployee,
      destination:formValues.destination,
      description1:formValues.description1,
      monthExp1:formValues.monthExp1,
      prevEmployee:formValues.prevEmployee,
      description2:formValues.description2,
      monthExp2:formValues.monthExp2,
    }).then(res => res.data)

    const data=await res.data
    console.log(res)
    return data}catch(err){console.log(err)}
  }
  return (
    <>
      <div className=" formy d-flex justify-content-center">
        <form id="registrationForm" onSubmit={HandleSubmit} encType="multipart/form-data">
          <h1>Employment Details</h1>
          <div class="mb-3">
            <label for="RegistrationName" class="form-label">
              Current Employer
            </label>
            <input
              type="text"
              name="currEmployee"
              class="form-control"
              id="RegistrationName"
              aria-describedby="emailHelp"
              value={formValues.currEmployee}
              onChange={handleChange}
              required
            />
          </div>
          <div class="mb-3">
            <label for="RegistrationEmail" class="form-label">
              Destination
            </label>
            <input
              type="text"
              name="destination"
              class="form-control"
              id="RegistrationEmail"
              aria-describedby="emailHelp"
              value={formValues.destination}
              onChange={handleChange}
              required
            />
          </div>
          <div class="mb-3">
            <label for="RegistraionPassword" class="form-label">
              Job Description
            </label>
            <textarea
              type="text"
              name="description1"
              rows={"5"}
              cols={"70"}
              class="form-control"
              id="RegistrationAddress"
              value={formValues.description1}
              style={{ height: "150px", width: "700px" }}
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="RegistraionMobile" class="form-label">
              Experience in Month
            </label>
            <input
              type="number"
              name="monthExp1"
              class="form-control"
              id="RegistraionMobile"
              value={formValues.monthExp1}
              onChange={handleChange}
              required
            />
          </div>
          <div class="col-12">
            <label for="RegistrationAddress" class="form-label">
              Previos Employer
            </label>
            <input
              type="text"
              name="prevEmployee"
              class="form-control"
              id="RegistrationAddress"
              value={formValues.prevEmployee}
              onChange={handleChange}
              required
            />
          </div>
          <div class="col-12">
            <label for="RegistrationAddress2" class="form-label">
              Job Description
            </label>
            <textarea
              type="text"
              name="skills"
              class="form-control"
              id="RegistrationAddress2"
              value={formValues.skills}
              style={{ height: "150px", width: "700px" }}
              onChange={handleChange}
              required
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              Experience in month
            </label>
            <input
              type="text"
              name="monthExp2"
              class="form-control"
              id="inputCity"
              value={formValues.monthExp2}
              style={{ width: "700px" }}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn" style={{ margin: "10px" }}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Employment;
