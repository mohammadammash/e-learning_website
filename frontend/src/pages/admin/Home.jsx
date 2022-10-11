import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//Components:
import Navbar from "../../components/Navbar";

export default function Home() {
  useEffect(() => {
    console.log("MY ADMIN, This page would retrieve all courses for the admin( in admin middleware) so in this way any else user would be logged out and redirect to the home page, but I didn't have time to fetch the API so it would show for all users");
  }, []);

  return (
    <>
      <Navbar />
      <h1>My Admin</h1>
    </>
  );
}
