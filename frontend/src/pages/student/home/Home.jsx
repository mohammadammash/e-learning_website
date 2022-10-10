import Navbar from "../../../components/Navbar";
import { useState, useRef, useEffect } from "react";
import { studentCourses_getAPI } from "../../../api/student/getCourses";

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
            {courses.map(({ _id, name, description, credits }) => {
              return (
                <div className="course-card" key={_id}>
                  <h1>Course: {name}</h1>
                  <h2>Course Description: </h2>
                  <p className="course-description">{description}</p>
                  <p>
                    CREDITS: <span className="course-credits">{credits}</span>
                  </p>
                </div>
              );
            })}
          </>
        )}
      </section>
    </>
  );
}
