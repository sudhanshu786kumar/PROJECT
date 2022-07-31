import React from "react";
import { useState } from "react";
import "./user.css";
const Education = () => {
  const initialValues = {
    collegeName: "",
    gradYear: null,
    graduated: "",
    schoolName: "",
    schoolYear: null,
    skills: "",
    certification: "",
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
        <form id="registrationForm">
          <h1>Education Details</h1>
          <div class="mb-3">
            <label for="RegistrationName" class="form-label">
              College/University
            </label>
            <input
              type="text"
              name="collegeName"
              class="form-control"
              id="RegistrationName"
              aria-describedby="emailHelp"
              value={formValues.college}
              onChange={handleChange}
              required
            />
          </div>
          <div class="mb-3">
            <label for="RegistrationEmail" class="form-label">
              Passout year
            </label>
            <input
              type="number"
              name="gradYear"
              class="form-control"
              id="RegistrationEmail"
              aria-describedby="emailHelp"
              value={formValues.gradYear}
              onChange={handleChange}
              required
            />
          </div>
          <div class="mb-3">
            <label for="RegistraionPassword" class="form-label">
              Graduated
            </label>
            <select
              name="graduated"
              id="RegistrationPassword"
              class="form-control"
              style={{ width: "700px" }}
              onChange={handleChange}
            >
              <option selected value="option 1"></option>  {" "}
              <option value="option 2">yes</option> {" "}
              <option value="option 3">No</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="RegistraionMobile" class="form-label">
              School Name
            </label>
            <input
              type="text"
              name="schoolName"
              class="form-control"
              id="RegistraionMobile"
              value={formValues.schoolName}
              onChange={handleChange}
              required
            />
          </div>
          <div class="col-12">
            <label for="RegistrationAddress" class="form-label">
              Number of year attended in
            </label>
            <input
              type="number"
              name="schoolYear"
              class="form-control"
              id="RegistrationAddress"
              value={formValues.schoolYear}
              onChange={handleChange}
              required
            />
          </div>
          <div class="col-12">
            <label for="RegistrationAddress2" class="form-label">
              skills and Qualification
            </label>
            <textarea
              type="text"
              name="skills"
              rows={"5"}
              cols={"70"}
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
              certification
            </label>
            <textarea
              type="textarea"
              name="certification"
              rows={"5"}
              cols={"70"}
              class="form-control"
              id="inputCity"
              value={formValues.certification}
              style={{ height: "150px", width: "700px" }}
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

export default Education;
