import FeatureCard from "../components/common/FeatureCard";
import { FaRoute, FaTruck, FaUsers, FaBrain } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  const features = [
    {
      icon: <FaTruck />,
      title: "Fleet Inventory & Telemetry",
      desc: "Monitor vehicle location, performance and fuel efficiency in real time."
    },
    {
      icon: <FaRoute />,
      title: "AI Route Optimization",
      desc: "Optimize routes dynamically to save time and reduce fuel costs."
    },
    {
      icon: <FaBrain />,
      title: "Predictive Maintenance",
      desc: "Forecast maintenance schedules with AI-powered analytics."
    },
    {
      icon: <FaUsers />,
      title: "Smart Booking System",
      desc: "Offer intelligent booking and personalized travel recommendations."
    }
  ];

  return (
    <div className="home-page">
      

      <header className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Smart Fleet & Urban Mobility Platform</h1>
          <p>Empowering logistics with AI-driven insights, automation, and sustainability.</p>
          <div className="hero-buttons">
            <a href="/login" className="btn blue">Admin Login</a>
            <a href="/login?role=customer" className="btn indigo">Customer Login</a>
            <a href="/register" className="btn green">Sign Up</a>
          </div>
        </div>
      </header>

      <section className="features">
        <h2>Platform Features</h2>
        <div className="feature-grid">
          {features.map((f, i) => <FeatureCard key={i} {...f} />)}
        </div>
      </section>

      <section className="status">
        <h2>Current System Status</h2>
        <div className="status-grid">
          <div className="status-box">Active Vehicles 🚚 : <span>87%</span></div>
          <div className="status-box">Maintenance Alerts 🔧 : <span>3 Pending</span></div>
          <div className="status-box">Customer Bookings 📦 : <span>142</span></div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
