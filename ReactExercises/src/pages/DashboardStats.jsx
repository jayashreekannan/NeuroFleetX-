.dash-wrapper {
  padding: 40px;
  animation: fadeIn 0.7s ease-in-out;
}

.role-badge {
  font-size: 18px;
  color: #444;
  margin-bottom: 20px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin: 30px 0;
}

.stat-card {
  background: #ffffffc9;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0px 4px 20px rgba(0,0,0,0.1);
  text-align: center;
  backdrop-filter: blur(6px);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.18);
}

.stat-card h3 {
  margin-bottom: 10px;
  color: #333;
}

.stat-card p {
  font-size: 26px;
  font-weight: bold;
  color: #2a4fa3;
}
