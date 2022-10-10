export default function Button({label, text, toggleHide}) {
  return (
    <>
      <label>{label}</label>
      <button className="show-login-button btn" onClick={toggleHide}>{text}</button>
    </>
  );
}
