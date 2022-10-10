import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
//COMPONENTS:
import Landing from "./pages/Landing.jsx";
import Home from "./pages/student/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
