export default function Input({ classes, placeholder, type}) {
  return (
    <>
      <input className={classes} type={type} placeholder={placeholder}></input>
    </>
  );
}
