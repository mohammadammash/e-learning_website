import "./landing.css";
import img from "../../assets/Happy Bunch - Desk.png";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
//Components
import Button from "../../components/Button";
import Popup from "../../components/Popup";

export default function Landing() {
  const [hidden, setHidden] = useState(true); //state to show/hide login popup
  const toggleHide = () => {
    //parent function to let children & parent toggle popup modal
    setHidden((hidden) => !hidden); //toggle last state
  };

  //login inputs:
  const email = useRef(0);
  const password = useRef(0);
  const navigate = useNavigate(); //to render routes

  const submitLogin = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div className="main-landing">
        <section className="left-section">
          <div className="content">
            <p className="top-text">E-learning is a better way of Learning</p>
            <div className="middle">
              <Button label={"Already A User?"} text={"Login"} toggleHide={toggleHide} />
            </div>
            <p className="bottom-text">Are you a student but without an account? Reach out to your instructor, then revisit us with your created account</p>
          </div>
        </section>

        <section className="right-section">
          <img className="landing-img" src={img} alt="landing-img1" />
        </section>
      </div>

      <Popup modal_type={"login"} hidden={hidden} toggleHide={toggleHide} submitLogin={submitLogin} email={email} password={password}/>
    </>
  );
}
