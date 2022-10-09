export default function Button({label, text}) {
  return (
    <>
      <label>{label}</label>
      <button className="show-login-button btn">{text}</button>
    </>
  );
}
