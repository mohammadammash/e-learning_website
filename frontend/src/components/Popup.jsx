import Input from "./Input";
import Button from "./Button";

export default function Popup({ modal_type }) {
  return (
    <section className="modal">
      <div className="modalContent">
        <button className="close-button">✖</button>
        <h2 className="capitalize">{modal_type}</h2>
        <form className="form-group">
            {/* if the popup type is login: show inputs and button */}
          {modal_type === "login" && (
            <>
              <Input classes={"form-input"} type={"email"} placeholder={"email"} />
              <Input classes={"form-input"} type={"password"} placeholder={"password"} />
              <Button text={"Submit"} />
            </>
          )}
        </form>
      </div>
    </section>
  );
}
