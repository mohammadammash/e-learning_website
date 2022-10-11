import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
//COMPONENTS:
import Landing from "./pages/Landing.jsx";
import StudentHome from "./pages/student/Home.jsx";
import Assignment from "./pages/student/Assignment.jsx";
import InstructorHome from "./pages/instructor/Home.jsx";
import AdminHome from "./pages/admin/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>

        {/* STUDENT ROUTES */}
        <Route path="/home" element={<StudentHome />}></Route>
        <Route path="/home/:course_name" element={<Assignment />}></Route>

        {/* INSTRUCTOR ROUTES */}
        <Route path="/instructor/home" element={<InstructorHome />}></Route>

        {/* ADMIN ROUTES */}
        <Route path="/admin/home" element={<AdminHome />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
