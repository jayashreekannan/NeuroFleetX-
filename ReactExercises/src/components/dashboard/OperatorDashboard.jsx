import "./DashboardRole.css";
import { FaTruck, FaMapMarkedAlt, FaClipboardCheck } from "react-icons/fa";

const OperatorDashboard = () => {
  return (
    <div className="role-dashboard">
      <h2 className="dashboard-title">Operator Dashboard</h2>
      <p className="dashboard-subtitle">Track vehicles, routes, and operations</p>
      <div className="dashboard-cards">
        <div className="dashboard-card operator">
          <FaTruck className="icon" />
          <h3>Active Vehicles</h3>
          <p>Monitor live telemetry and fleet location data.</p>
        </div>
        <div className="dashboard-card operator">
          <FaMapMarkedAlt className="icon" />
          <h3>Route Planner</h3>
          <p>AI-optimized delivery and logistics route visualization.</p>
        </div>
        <div className="dashboard-card operator">
          <FaClipboardCheck className="icon" />
          <h3>Task Status</h3>
          <p>Check pending, ongoing, and completed delivery tasks.</p>
        </div>
      </div>
    </div>
  );
};

export default OperatorDashboard;
