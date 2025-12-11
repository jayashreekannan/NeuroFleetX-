// src/components/common/FeatureCard.jsx
import "./FeatureCard.css";

const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className="feature-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default FeatureCard;
