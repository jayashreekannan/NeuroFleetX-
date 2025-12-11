import "./DashboardRole.css";
import { FaUsersCog, FaTruckLoading, FaChartLine, FaTools } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div className="role-dashboard">
      <h2 className="dashboard-title">Admin Control Center</h2>
      <p className="dashboard-subtitle">Manage users, vehicles, and system analytics</p>
      <div className="dashboard-cards">
        <div className="dashboard-card admin">
          <FaUsersCog className="icon" />
          <h3>User Management</h3>
          <p>View, edit, or remove users and assign roles.</p>
        </div>
        <div className="dashboard-card admin">
          <FaTruckLoading className="icon" />
          <h3>Fleet Overview</h3>
          <p>Monitor the entire fleet’s status and telemetry data.</p>
        </div>
        <div className="dashboard-card admin">
          <FaChartLine className="icon" />
          <h3>System Analytics</h3>
          <p>View performance graphs and key AI-driven KPIs.</p>
        </div>
        <div className="dashboard-card admin">
          <FaTools className="icon" />
          <h3>Maintenance Setup</h3>
          <p>Manage predictive maintenance schedules and alerts.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
