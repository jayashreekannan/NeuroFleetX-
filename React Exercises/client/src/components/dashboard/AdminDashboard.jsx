import VehicleCard from "../fleet/VehicleCard";
import "./Dashboard.css";

const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <div className="dashboard-cards">
        <VehicleCard name="Truck 01" status="Active" />
        <VehicleCard name="Van 02" status="Maintenance" />
        <VehicleCard name="Car 03" status="Active" />
      </div>
    </div>
  );
};

export default AdminDashboard;
