import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FaUserPlus } from "react-icons/fa";
import "./Auth.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Customer");
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ username, email, password, role });
      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <div className="login-header">
        <FaUserPlus className="login-icon" />
        <h2>Create Account</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="role-dropdown"
          required
        >
          <option value="Customer">Customer</option>
          <option value="Admin">Admin</option>
          <option value="Analyst">Analyst</option>
          <option value="Operator">Operator</option>
        </select>

        <button type="submit" className="button">Sign Up</button>

        <div className="extra-links">
          <p>Already have an account?</p>
          <a href="/login">Login</a>
        </div>
      </form>
    </div>
  );
};

export default Register;
