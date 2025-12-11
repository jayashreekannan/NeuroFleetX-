import { useState } from "react";
import Recommendations from "./Recommendations";
import "./Booking.css";

const BookingForm = () => {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="booking-container">
      <h3>Book a Route</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Pickup Location" 
          value={pickup} 
          onChange={(e) => setPickup(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Drop Location" 
          value={drop} 
          onChange={(e) => setDrop(e.target.value)} 
          required 
        />
        <button type="submit" className="button">Find Route</button>
      </form>
      {submitted && <Recommendations pickup={pickup} drop={drop} />}
    </div>
  );
};

export default BookingForm;
