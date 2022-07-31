import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const JobDetails = () => {
  const id = useParams.id;
  const [inputs, setInputs] = useState();
  const fetchHandler = async () => {
    return await axios
      .get(`http://localhost:5000/admin/job/${id}`)
      .then((res) => res.data);
  };
  useEffect(() => {
    fetchHandler().then((data) => setInputs(data));
  }, []);
  console.log(inputs);
  return (
    <>
      <div>
        <h3>{inputs.JobDetails}</h3>
        <div></div>
        <div>
          <h2>Job Description</h2>
          <p>
            <strong>
              <u>UI Developer with React JS</u>
            </strong>
          </p>
          <p>
            <b>
              <u>Job Location:</u>
            </b>
            Pune, Bangalore
          </p>
        </div>
        <div>
          <p>
            <b>
              <u>Responsibilities:</u>
            </b>
          </p>
          <p>
            <ul>
              <li>Delivering a complete front end application</li>
              <li>
                Writing tested, idiommatic and documented JavaSript, HTML and
                CSS3
              </li>
              <li>
                Coordinating the workflow between the graphic designer, the HTML
                coder
              </li>
              <li>
                Cooperating with the back-end developer in the process of
                building the RESTful API
              </li>
              <li>Communicating with external web services</li>
              <li>
                Ensure effective Design, Development, Validation and Support
                activities in line with client needs and architectural
                requirements
              </li>
              <li>Adherence to the organizational guidelines and processes</li>
            </ul>
          </p>
        </div>
        <div>
          <p>
            <b>
              <u>Requirements:</u>
            </b>
          </p>
          <p>
            <b>Overall Experience-</b>
          </p>
          <p>3 to 9 years</p>
          <p>
            <b>Mandatory Experience-</b>
          </p>
          <p>One year relevant Experience in UI tools.</p>
          <p>Good knowledge in html, css, JavaScript and React Js</p>
        </div>
        <div>
          <p>Role: Software Developer</p>
          <p>Industry Type: IT-Software, Software Services</p>
          <p>
            Functional Area: IT Software- Application Programming, Maintenance
          </p>
          <p>Employment Type: Full Time, Permanent</p>
          <p>Role Category: Programming & Design</p>
        </div>
        <div>
          <p>
            <b>Education</b>
          </p>
        </div>
        <div>
          <p>UG: Any Graduate in Any Specialization, Graduation Not Required</p>
          <p>
            PG: Any Postgraduate in Any Specialization, Post Graduation Not
            Required
          </p>
          <p>Doctorate: Any Doctorate in Any Specialization</p>
        </div>
      </div>
      ;
    </>
  );
};

export default JobDetails;
