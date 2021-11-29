import React from "react";
import { Link } from "react-router-dom";
import showlogo from "../Images/bookmyshowlogo.png";
import styles from "../components/navbar.module.css";

function Navbar() {
  return (
    <div className={styles.nav}>
      <img className={styles.pic1} src={showlogo} alt="bookmyshow1" />
      <Link to="/login">
        <button className={styles.loginbtn}>Login</button>
      </Link>
    </div>
  );
}

export default Navbar;
