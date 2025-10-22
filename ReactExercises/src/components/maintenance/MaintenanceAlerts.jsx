import "./Maintenance.css";

const MaintenanceAlerts = () => {
  const alerts = [
    "Truck 01 - Engine oil low",
    "Van 02 - Tire pressure low",
    "Car 03 - Brake pads require check",
  ];

  return (
    <div className="dashboard">
      <h3>Maintenance Alerts</h3>
      {alerts.map((alert, index) => (
        <div key={index} className="maintenance-alert">{alert}</div>
      ))}
    </div>
  );
};

export default MaintenanceAlerts;
