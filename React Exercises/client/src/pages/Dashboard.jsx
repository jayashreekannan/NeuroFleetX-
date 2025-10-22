import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import AdminDashboard from "../components/dashboard/AdminDashboard";
import OperatorDashboard from "../components/dashboard/OperatorDashboard";
import AnalystDashboard from "../components/dashboard/AnalystDashboard";
import CustomerDashboard from "../components/dashboard/CustomerDashboard";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <p>Please login to access dashboard</p>;

  switch(user.role) {
    case "admin":
      return <AdminDashboard />;
    case "operator":
      return <OperatorDashboard />;
    case "analyst":
      return <AnalystDashboard />;
    default:
      return <CustomerDashboard />;
  }
};

export default Dashboard;
