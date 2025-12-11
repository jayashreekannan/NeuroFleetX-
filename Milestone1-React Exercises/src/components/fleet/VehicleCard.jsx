import "./VehicleCard.css";

const VehicleCard = ({ name, status }) => {
  return (
    <div className={`vehicle-card ${status.toLowerCase()}`}>
      <h3>{name}</h3>
      <p>Status: {status}</p>
    </div>
  );
};

export default VehicleCard;
