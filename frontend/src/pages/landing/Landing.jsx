import React, { Component } from "react";
import "./landing.css";
import img from "../../assets/Happy Bunch - Desk.png";

export default function Landing() {
  return (
    <>
      <div className="main-landing">
        <section className="left-section">
          <div className="content">
            <p className="top-text">E-learning is a better way of Learning</p>
            <div className="middle">
              <label>Already A User?</label>
              <button className="show-login-button btn">Login</button>
            </div>
            <p className="bottom-text">
              Are you a student but without an account? Reach out to your
              instructor, then revisit us with your created account
            </p>
          </div>
        </section>
        <section className="right-section">
          <img className="landing-img" src={img} alt="landing-img1" />
        </section>
      </div>

      <section className="modal">
        <div className="modalContent">
          <button className="close-button">✖</button>
          <h2>Login</h2>
          <form className="form-group">
            <input
              className="form-input"
              type="text"
              placeholder="email"
            ></input>
            <input
              className="form-input"
              type="text"
              placeholder="password"
            ></input>
            <button className="btn">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}
