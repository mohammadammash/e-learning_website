import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const logoutUser = ()=>{
        localStorage.clear();
        navigate('/');
    }


  return (
    <>
      <nav className="nav">
        <h1 className="nav-logo">EDULAB</h1>
        <div className="nav-links">
        <Link to='/home' className="nav-link" href="#ds">
          HOME
        </Link>
        <Button  text='logout' changeState={logoutUser}/>
        </div>
      </nav>
    </>
  );
}
