import "./DashboardRole.css";
import { FaClipboardList, FaStar, FaRoute } from "react-icons/fa";

const CustomerDashboard = () => {
  return (
    <div className="role-dashboard">
      <h2 className="dashboard-title">Customer Dashboard</h2>
      <p className="dashboard-subtitle">Book vehicles and track your orders</p>
      <div className="dashboard-cards">
        <div className="dashboard-card customer">
          <FaClipboardList className="icon" />
          <h3>My Bookings</h3>
          <p>View your active, past, and upcoming bookings easily.</p>
        </div>
        <div className="dashboard-card customer">
          <FaRoute className="icon" />
          <h3>Track Your Ride</h3>
          <p>Real-time route tracking and vehicle ETA visibility.</p>
        </div>
        <div className="dashboard-card customer">
          <FaStar className="icon" />
          <h3>Rate & Feedback</h3>
          <p>Provide reviews and help improve our service quality.</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
