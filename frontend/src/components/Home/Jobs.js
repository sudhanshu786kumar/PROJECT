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
  const [jobs, newval] = useState();

  useEffect(() => {
    fetchHandler().then((data) => newval(data));
  }, []);

  console.log(jobs);
  return (
    <div>
      <Search />
      <h1>JOBS</h1>
      <div id="jobcards">
        <ul className="jobs">
          {jobs &&
            jobs.map((jobe, i) => (
              <li key={i}>
                <Job Sook={jobe} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Jobs;
