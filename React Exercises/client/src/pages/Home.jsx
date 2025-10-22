import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to NeuroFleetX</h1>
      <p>AI-powered fleet management and route optimization system.</p>
      <div className="home-buttons">
        <Link to="/login" className="button">Login</Link>
        <Link to="/register" className="button">Register</Link>
      </div>
    </div>
  );
};

export default Home;
