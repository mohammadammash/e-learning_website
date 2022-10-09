import "./landing.css";
import img from "../../assets/Happy Bunch - Desk.png";
//Components
import Button from "../../components/Button";
import Popup from "../../components/Popup";

export default function Landing() {
  return (
    <>
      <div className="main-landing">

        <section className="left-section">
          <div className="content">
            <p className="top-text">E-learning is a better way of Learning</p>
            <div className="middle">
              <Button label={"Already A User?"} text={"Login"} />
            </div>
            <p className="bottom-text">Are you a student but without an account? Reach out to your instructor, then revisit us with your created account</p>
          </div>
        </section>

        <section className="right-section">
          <img className="landing-img" src={img} alt="landing-img1" />
        </section>
      </div>
      
      <Popup modal_type={'login'}/>
    </>
  );
}
