import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FaUserLock } from "react-icons/fa";
import "./Auth.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Customer");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ username, password, role });
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="form-container">
      <div className="login-header">
        <FaUserLock className="login-icon" />
        <h2>Login</h2>
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
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Customer">Customer</option>
          <option value="Admin">Admin</option>
          <option value="Analyst">Analyst</option>
          <option value="Operator">Operator</option>
        </select>

        <button type="submit" className="button">Login</button>

        <div className="extra-links">
          <a href="/forgot-password">Forgot Password?</a>
          <a href="/signup">Create Account</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
