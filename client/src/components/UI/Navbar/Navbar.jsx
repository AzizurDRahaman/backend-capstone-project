import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.rectangle1}></div>
        <div className={styles.rectangle2}></div>
        <div className={styles.rectangle3}></div>
        <h1>Jobfinder</h1>
        <div className={styles.buttons}>
          <button className={styles.login}>Login</button>
          <button className={styles.register}>Register</button>
        </div>
      </div>
    </nav>
  );
}
