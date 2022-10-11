import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//Components:
import Navbar from "../../components/Navbar";
import {instructorCourses_getAPI} from "../../api/getInstructorCourses";
import { useState } from "react";

export default function Home() {
  const navigate = new useNavigate();
  const [courses, setCourses] = useState([]);

  const getInstructorCourses = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const data = await instructorCourses_getAPI(user.token);
    if (!data) {
      //unauthenticated - token expired (return false from fetch get)
      localStorage.clear();
      navigate("/");
    }
    console.log(data);
    setCourses(data);
  };

  useEffect(() => {
    getInstructorCourses();
  }, []);

  return (
    <>
      <Navbar />
      {courses.length <= 0 ? (
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <h1>My Instructor</h1>
      )}
    </>
  );
}
