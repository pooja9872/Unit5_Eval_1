import React from "react";
import styles from "../components/login.module.css";

function Login() {
  return (
    <div className={styles.loginPage}>
      <h1 className={styles.loginheading}>Login Page</h1>
      <input type="text" placeholder="Enter your email address" />
      <input type="password" placeholder="Enter password" />
      <button>Submit</button>
    </div>
  );
}

export default Login;
