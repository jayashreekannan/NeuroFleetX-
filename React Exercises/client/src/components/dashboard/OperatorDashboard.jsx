import VehicleCard from "../fleet/VehicleCard";
import "./Dashboard.css";

const OperatorDashboard = () => {
  return (
    <div className="dashboard">
      <h2>Operator Dashboard</h2>
      <div className="dashboard-cards">
        <VehicleCard name="Truck 01" status="Active" />
        <VehicleCard name="Van 02" status="Maintenance" />
      </div>
    </div>
  );
};

export default OperatorDashboard;
