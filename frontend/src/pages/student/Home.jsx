import { useState, useRef, useEffect } from "react";
import { studentCourses_getAPI } from "../../api/getCourses";
import { useNavigate } from "react-router-dom";
import "./student.css";
//Components:
import Navbar from "../../components/Navbar";
import Course from "../../components/Course";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  const getCourses = async (token) => {
    const data = await studentCourses_getAPI(token);
    if (!data) {
      //unauthenticated - token expired (return false from fetch get)
      localStorage.clear();
      navigate("/");
    }
    setCourses(data);
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("user")).token;
    getCourses(token);
  }, []);

  return (
    <>
      <Navbar />

      <section className="courses-container">
        {/* if data isn't retrieved yet -LOADING */}
        {courses.length <= 0 ? (
          <div className="spinner-container">
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <>
            {courses.map((course) => (
              <Course key={course._id} data={course}/>
            ))}
          </>
        )}
      </section>
    </>
  );
}
