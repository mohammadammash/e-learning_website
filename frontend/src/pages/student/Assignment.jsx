import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./student.css";
//Components:
import Navbar from "../../components/Navbar";

export default function Assignment() {
  const {state}  = useLocation();
  const {course_id} = state;
  console.log(course_id);

  return (
    <>
      <Navbar />
      <h1>AssignmentOOO</h1>
    </>
  );
}
