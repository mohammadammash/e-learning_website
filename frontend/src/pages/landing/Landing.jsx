import "./landing.css";
import img from "../../assets/Happy Bunch - Desk.png";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
//Components
import Button from "../../components/Button";
import Popup from "../../components/Popup";

export default function Landing() {
  const [hidden, setHidden] = useState(true); //state to show/hide login popup
  //parent function to let children & parent toggle popup modal
  const toggleHide = () => {
    setHidden((hidden) => !hidden); //toggle last state
  };

  //login inputs:
  const email = useRef(0);
  const password = useRef(0);
  const navigate = useNavigate(); //to render routes

  const submitLogin = async (e) => {
    e.preventDefault();
    //validation
    if (email.current.value === "" || password.current.value === "") {
      console.log("EMPTY");
      return;
    }
    //post login user
    const loginURL = `${window.baseURL}/login`;
    const data = {
      email: email.current.value,
      password: password.current.value,
    };
    try {
      const response = await window.postAPI(loginURL, data);
      if(response.status === 200){
        const user = response.data.data;
        if(user.user_type === 'student'){
          console.log('HE IS A STUDENT');
          localStorage.setItem("token", JSON.stringify(user.token));
          navigate('/student');
        }
        else if(user.user_type === 'instructor'){
          console.log('HE IN A INSTRUCTOR');
          localStorage.setItem("token", JSON.stringify(user.token));
          navigate("/instructor");
        }
        else if(user.user_type === 'admin'){
          console.log("HE IN A ADMIN");
          localStorage.setItem("token", JSON.stringify(user.token));
          navigate("/admin");
        }
      }
    } catch (err) {
      console.log(err);
    }
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
