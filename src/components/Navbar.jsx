import React from "react";
import showlogo from "../Images/bookmyshowlogo.png";
import styles from "../components/navbar.module.css";

function Navbar() {
  return (
    <div className={styles.nav}>
      <img className={styles.pic1} src={showlogo} alt="bookmyshow1" />
      <h1>Login</h1>
    </div>
  );
}

export default Navbar;
