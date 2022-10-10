import Button from "./Button";

export default function Navbar() {
    const logoutUser = ()=>{
        console.log('logged out!');
    }

  return (
    <>
      <nav className="nav">
        <h1 className="nav-logo">EDULAB</h1>
        <div className="nav-links">
        <a className="nav-link" href="#ds">
          HOME/COURSES
        </a>
        <Button  text='logout' changeState={logoutUser}/>
        </div>
      </nav>
    </>
  );
}
