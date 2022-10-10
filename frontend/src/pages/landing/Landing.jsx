import "./landing.css";
import img from "../../assets/Happy Bunch - Desk.png";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
//api
import { loginUser_postAPI } from "../../api/login";
//Components
import Button from "../../components/Button";
import Popup from "../../components/Popup";

export default function Landing() {
  const [hidden, setHidden] = useState(true); //state to show/hide login popup
  //parent function to let children & parent toggle popup modal
  const toggleHide = () => {
    setHidden((hidden) => !hidden); //toggle last state
  };

  const email = useRef(0);
  const password = useRef(0);
  const navigate = useNavigate();

  const submitLogin = async (e) => {
    e.preventDefault();
    if (email.current.value === "" || password.current.value === "") {
      console.log("EMPTY");
      return;
    }
    //post login user
    const data =  await loginUser_postAPI(email.current.value, password.current.value);
    const user = { name:data.name, email:data.email, profile_url:data.profile_url, token:data.token };
    localStorage.setItem('user',JSON.stringify(user));
  };

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

      <Popup modal_type={"login"} hidden={hidden} toggleHide={toggleHide} submitLogin={submitLogin} email={email} password={password} />
    </>
  );
}
