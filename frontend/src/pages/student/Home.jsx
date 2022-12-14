import { useState, useRef, useEffect } from "react";
import { courses_getAPI } from "../../api/getCourses";
import { useNavigate } from "react-router-dom";
import "./student.css";
//Components:
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";

export default function Home() {
  const navigate = useNavigate();

  //START OF GET ALL COURSES ON PAGE LOAD
  const [courses, setCourses] = useState([]);
  const getCourses = async (token) => {
    const data = await courses_getAPI(token, 'student');
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
  //END OF GET ALL COURSES ON PAGE LOAD

  //START OF SELECTING SINGLE ASSIGNMENT //passed to course button, so when clicked get the id of the clicked button
  function showAssignment(course) {
    navigate(`/home/${course.name}`, { state: { course_id: course._id, course_name: course.name } });
  }
  //END OF SELECTING SINGLE ASSIGNMENT

  return (
    <>
      <Navbar />

      <section className="cards-container">
        {/* if data isn't retrieved yet -LOADING */}
        {courses.length <= 0 ? (
          <div className="spinner-container">
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <>
            {courses.map((course) => (
              <Card key={course._id} data={course} showAssignment={showAssignment} card_type={"course"} />
            ))}
          </>
        )}
      </section>
    </>
  );
}
