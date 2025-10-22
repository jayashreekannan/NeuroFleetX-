import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">NeuroFleetX</Link>
      <div className="navbar-links">
        {user ? (
          <>
            <span className="navbar-user">{user.username}</span>
            <button onClick={logout} className="navbar-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-link">Login</Link>
            <Link to="/register" className="navbar-link">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
