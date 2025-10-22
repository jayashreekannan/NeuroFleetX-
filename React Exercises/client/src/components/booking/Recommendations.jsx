import "./Booking.css";

const Recommendations = ({ pickup, drop }) => {
  const dummyRoutes = [
    { name: "Route 1", time: "25 mins", eco: "Low Emission" },
    { name: "Route 2", time: "30 mins", eco: "Medium Emission" },
  ];

  return (
    <div>
      <h4>Recommended Routes from {pickup} to {drop}:</h4>
      {dummyRoutes.map((route, index) => (
        <div key={index} className="recommendation-card">
          <strong>{route.name}</strong> - {route.time} ({route.eco})
        </div>
      ))}
    </div>
  );
};

export default Recommendations;
