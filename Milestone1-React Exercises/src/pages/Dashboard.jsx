import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AdminDashboard from "../components/dashboard/AdminDashboard";
import OperatorDashboard from "../components/dashboard/OperatorDashboard";
import AnalystDashboard from "../components/dashboard/AnalystDashboard";
import CustomerDashboard from "../components/dashboard/CustomerDashboard";
import "../components/dashboard/Dashboard.css";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [stats, setStats] = useState({ totalUsers: 0, totalLogins: 0 });

  useEffect(() => {
    if (!user) navigate("/login");

    fetch("http://localhost:8080/api/auth/stats")
      .then((res) => res.json())
      .then(setStats)
      .catch(() => console.log("Stats fetch failed"));
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="dashboard-container">
      <h1>Welcome, {user.username}</h1>
      <p>Role: {user.role}</p>
      <div className="stats-grid">
        <div>Total Users: {stats.totalUsers}</div>
        <div>Total Logins: {stats.totalLogins}</div>
        <div>Your Login Count: {user.loginCount}</div>
      </div>
      <div className="dashboard-role">
        {user.role.toLowerCase() === "admin" && <AdminDashboard />}
        {user.role.toLowerCase() === "operator" && <OperatorDashboard />}
        {user.role.toLowerCase() === "analyst" && <AnalystDashboard />}
        {user.role.toLowerCase() === "customer" && <CustomerDashboard />}
      </div>
    </div>
  );
};

export default Dashboard;
