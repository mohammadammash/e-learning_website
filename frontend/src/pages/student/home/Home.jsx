import { useState, useRef, useEffect } from "react";
import { studentCourses_getAPI } from "../../../api/student/getCourses";
//Components:
import Navbar from "../../../components/Navbar";
import Course from "../../../components/Course";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const getCourses = async (token) => {
    const data = await studentCourses_getAPI(token);
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
        {courses.length <= 0 ? (
          <h1>Loading</h1>
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
