import React, { Component } from "react";
import "./landing.css";
import img from '../../assets/Happy Bunch - Desk.png';

export default function Landing() {
  return (
    <div className="main-landing">
      <section className="left-section">
        <p class='top-text'>E-learning is a better way of Learning</p>
        <div className="middle">
          <label>Already a user?</label>
          <button className="show-login"></button>
        </div>
        <p class='bottom-text'>Are you a student but without an account? Reach out to your instructor, then revisit us with your created account</p>
      </section>
      <section className="right-section">
        <img className="landing-img" src={img} alt="landing-img1" />
      </section>
    </div>
  );
}
