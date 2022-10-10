import Button from "./Button";

export default function Popup({ modal_type, hidden, toggleHide, submitLogin, email, password}) {
  if (!hidden) {
    return (
      <section className="modal">
        <div className="modalContent">
          <button className="close-button" onClick={toggleHide}>
            ✖
          </button>
          <h2 className="capitalize">{modal_type}</h2>
          <form className="form-group" onSubmit={submitLogin}>
            {/* if the popup type is login: show inputs and button */}
            {modal_type === "login" && (
              <>
                <input ref={email} className='form-input' type='email' placeholder='email'></input>
                <input ref={password} className='form-input' type='password' placeholder='password'></input>
                <Button text={"Submit"} />
              </>
            )}
          </form>
        </div>
      </section>
    );
  }
}
