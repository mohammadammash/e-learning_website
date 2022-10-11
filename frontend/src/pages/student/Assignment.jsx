import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./student.css";
import { courseAssignment_getAPI } from "../../api/getCourseAssignments";
//Components:
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";

export default function Assignment() {
  const { state } = useLocation();
  const { course_id, course_name } = state;
  //assignments received when page load from server
  const [assignments, setAssignments] = useState([]);
  const navigate = useNavigate();

  //get course assignments:
  const getCourseAssignments = async (id) => {
    const token = JSON.parse(localStorage.getItem("user")).token;
    const asgs = await courseAssignment_getAPI(token, course_id);
    if (!asgs) {
      localStorage.clear();
      navigate("/");
    } //if not authenticated //invalid - outdated token
    setAssignments(asgs);
  };

  //after getting course_id from location and assigning it to {course_id} load the data
  useEffect(() => {
    getCourseAssignments(course_id);
  }, []);

  return (
    <>
      <Navbar />
      {assignments.length <= 0 ? (
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <div className="cards-container">
          <h1>{course_name} Assignments</h1>
          {assignments.map((assignment) => {
            return <Card key={assignment._id} card_type="assignment" data={assignment} />;
          })}
        </div>
      )}
    </>
  );
}
