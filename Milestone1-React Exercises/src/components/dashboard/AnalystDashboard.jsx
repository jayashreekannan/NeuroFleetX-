import "./DashboardRole.css";
import { FaBrain, FaChartPie, FaCogs } from "react-icons/fa";

const AnalystDashboard = () => {
  return (
    <div className="role-dashboard">
      <h2 className="dashboard-title">AI Analyst Dashboard</h2>
      <p className="dashboard-subtitle">Get data insights and AI-driven optimization</p>
      <div className="dashboard-cards">
        <div className="dashboard-card analyst">
          <FaBrain className="icon" />
          <h3>AI Load Optimization</h3>
          <p>Analyze efficiency and improve fuel + route management.</p>
        </div>
        <div className="dashboard-card analyst">
          <FaChartPie className="icon" />
          <h3>Performance Analytics</h3>
          <p>Generate reports on fleet utilization and time efficiency.</p>
        </div>
        <div className="dashboard-card analyst">
          <FaCogs className="icon" />
          <h3>Predictive Insights</h3>
          <p>View predictive maintenance alerts and system AI logs.</p>
        </div>
      </div>
    </div>
  );
};

export default AnalystDashboard;
