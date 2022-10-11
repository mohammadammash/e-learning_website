import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//Components:
import Navbar from "../../components/Navbar";

export default function Home() {
  useEffect(() => {
    console.log("MY ADMIN");
  }, []);

  return (
    <>
      <Navbar />
      <h1>My Admin</h1>
    </>
  );
}
