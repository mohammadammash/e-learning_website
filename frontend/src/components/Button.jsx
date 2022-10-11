export default function Button({ label, text, changeState, type, task }) {
  return (
    <>
      <label>{label}</label>
      {type === "showAssignment" ? (
        <button className="show-login-button btn" onClick={()=>changeState(task)}>
          {text}
        </button>
      ) : (
        <button className="show-login-button btn" onClick={changeState}>
          {text}
        </button>
      )}
    </>
  );
}
