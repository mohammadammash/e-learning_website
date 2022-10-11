import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./instructor.css";
//Components:
import Navbar from "../../components/Navbar";

export default function InstructorHome() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("NEW INSTRUCTORO");
  }, []);

  return (
    <>
      <Navbar />

      <h1>Instructoroo</h1>
    </>
  );
}
