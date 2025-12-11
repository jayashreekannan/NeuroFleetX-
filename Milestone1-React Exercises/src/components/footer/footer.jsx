// import "./footer.css";

// const footer = () => {
//   return (
//     <footer className="footer">
//       © 2025 NeuroFleetX. All Rights Reserved.
//     </footer>
//   );
// };

// export default footer;
// src/components/footer/Footer.jsx
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} FleetAI. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
