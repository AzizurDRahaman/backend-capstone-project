import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.rectangle1}></div>
        <div className={styles.rectangle2}></div>
        <div className={styles.rectangle3}></div>
        <h1 onClick={() => window.location.href = "/"}>Jobfinder</h1>
        <div className={styles.buttons}>
          <button className={styles.login} onClick={() => window.location.href = "/sign-in"} >Login</button>
          <button className={styles.register} onClick={() => window.location.href = "/register"} >Register</button>
        </div>
      </div>
    </nav>
  );
}
