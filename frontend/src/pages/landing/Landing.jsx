import "./landing.css";
import img from "../../assets/Happy Bunch - Desk.png";
//Components
import Button from "../../components/Button";
import Input from "../../components/Input";

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

      <section className="modal display-none">
        <div className="modalContent">
          <button className="close-button">✖</button>
          <h2>Login</h2>
          <form className="form-group">
            <Input classes={"form-input"} type={"email"} placeholder={"email"} />
            <Input classes={"form-input"} type={"password"} placeholder={"password"} />
            <Button text={"Submit"} />
          </form>
        </div>
      </section>
    </>
  );
}
