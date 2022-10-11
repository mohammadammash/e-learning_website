import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { instructorCourses_getAPI } from "../../api/getInstructorCourses";
//Components:
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";

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
    setCourses(data);
  };

  useEffect(() => {
    getInstructorCourses();
  }, []);

  return (
    <>
      <Navbar />
      <section className="cards-container">
        {courses.length <= 0 ? (
          <div className="spinner-container">
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <>
            {courses.map((course) => (
              <Card key={course._id} data={course} card_type={"course"} />
            ))}
          </>
        )}
      </section>
    </>
  );
}
