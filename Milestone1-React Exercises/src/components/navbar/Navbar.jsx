import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="logo" />
          <span>NeuroFleetX-<span className="accent">AI</span></span>
        </Link>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Sign up</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
