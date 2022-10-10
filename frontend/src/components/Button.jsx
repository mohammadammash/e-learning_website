export default function Button({label, text, changeState}) {
  return (
    <>
      <label>{label}</label>
      <button className="show-login-button btn" onClick={changeState}>{text}</button>
    </>
  );
}
