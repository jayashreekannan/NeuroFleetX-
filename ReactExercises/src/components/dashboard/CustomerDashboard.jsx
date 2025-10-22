import BookingForm from "../booking/BookingForm";
import "./Dashboard.css";

const CustomerDashboard = () => {
  return (
    <div className="dashboard">
      <h2>Customer Dashboard</h2>
      <BookingForm />
    </div>
  );
};

export default CustomerDashboard;
