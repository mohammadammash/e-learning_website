import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//Components:
import Navbar from "../../components/Navbar";

export default function Home() {

  useEffect(() => {
    console.log("MY INSTRUCTOR");
  }, []);

  return (
    <>
      <Navbar />

      <h1>My Instructor</h1>
    </>
  );
}
