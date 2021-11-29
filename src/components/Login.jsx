import React from "react";
import { Link } from "react-router-dom";
import styles from "../components/login.module.css";

function Login() {
  return (
    <div className={styles.loginPage}>
      <h1 className={styles.loginheading}>Login Page</h1>
      <input type="text" placeholder="Enter your email address" />
      <input type="password" placeholder="Enter password" />
      <Link to="/dashboard">
        <button type="submit">Submit</button>
      </Link>
    </div>
  );
}

export default Login;
