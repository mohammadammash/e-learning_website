import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
//COMPONENTS:
import Landing from "./pages/Landing.jsx";
import Home from "./pages/student/Home.jsx";
import Assignment from "./pages/student/Assignment.jsx";
import InstructorHome from "./pages/instructor/InstructorHome.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        {/* STUDENT ROUTES */}
        <Route path="/home" element={<Home />}></Route>
        <Route path="/home/:course_name" element={<Assignment />}></Route>
        {/* INSTRUCTOR ROUTES */}
        <Route path="/instructor/home" element={<InstructorHome />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
