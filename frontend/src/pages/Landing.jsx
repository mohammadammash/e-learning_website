import "./landing.css";
import img from "../assets/Happy Bunch - Desk.png";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//api
import { loginUser_postAPI } from "../api/login";
//Components
import Button from "../components/Button";
import Popup from "../components/Popup";

export default function Landing() {
  //inputs
  const email = useRef(0);
  const password = useRef(0);
  const navigate = useNavigate();

  //popup show
  const [hidden, setHidden] = useState(true);
  const toggleHide = () => {
    setHidden((hidden) => !hidden); //toggle last state
  };

  //user type to redirect according
  const [userType, setUserType] = useState("");
  useEffect(() => {
    if (userType === "admin") navigate("/admin/home");
    else if (userType === "instructor") navigate("/instructor/home");
    else if (userType === "student") navigate("/home"); //we can use here else only, but to make sure usertype matches our userTypes
  }, [userType]);

  const submitLogin = async (e) => {
    e.preventDefault();
    if (email.current.value === "" || password.current.value === "") {
      return;
    }
    //post login user
    const data = await loginUser_postAPI(email.current.value, password.current.value);
    if (!data) return; //user not found
    const user = { name: data.name, email: data.email, profile_url: data.profile_url, token: data.token };
    localStorage.setItem("user", JSON.stringify(user));
    setUserType(data.user_type); //change user type which render the useEffect
  };

  return (
    <>
      <div className="main-landing">
        <section className="left-section">
          <div className="content">
            <p className="top-text">E-learning is a better way of Learning</p>
            <div className="middle">
              <Button label={"Already A User?"} text={"Login"} changeState={toggleHide} />
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
