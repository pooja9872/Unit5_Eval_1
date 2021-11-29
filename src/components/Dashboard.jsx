import React from "react";
import Navbar from "./Navbar";
import styles from "../components/dashboard.module.css";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className={styles.dashboardinfo}>
        <button className={styles.btndashboard}>Upcoming Events</button>
        <button className={styles.btndashboard}>Movies</button>
        <button className={styles.btndashboard}>Plays</button>
      </div>
    </div>
  );
}

export default Dashboard;
