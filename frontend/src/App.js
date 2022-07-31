import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Home/Header";
import Home from "./components/Home/Home";
import Register from "./components/User/Register";
import Form from "./components/Admin/Form";
import Detail from "./components/User/Detail";
import { useSelector } from "react-redux";
import Education from "./components/User/Education";
import Employment from "./components/User/Employment";
import Admin from "./components/Admin/Admin.js";
import Personal from "./components/User/Personal";
import Jobs from "./components/Home/Jobs";
import JobDetails from "./components/Home/JobDetails";
const App = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div>
      <header style={{ backgroundColor: "#8A39E1" }}>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/admin" element={<Admin />} exact />
          <Route path="/jobs" element={<Jobs />} exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="/admin/form" element={<Form />} exact />
          <Route path="/users" element={<Detail />} exact />
          <Route path="/education/:id" element={<Education />} exact />
          <Route path="/employment/:id" element={<Employment />} exact />
          <Route path="/Personal/:id" element={<Personal />} exact />
          <Route path="/job/JobDetails/:id" element={<JobDetails />} exact />
        </Routes>
      </main>
    </div>
  );
};

export default App;
