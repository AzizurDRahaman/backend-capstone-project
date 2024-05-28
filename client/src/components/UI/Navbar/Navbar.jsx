import React, { useContext, useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { AuthContext } from "../../../AuthContext/AuthContext";

export default function Navbar() {
  const { isAuthenticated, handleLogout } = useContext(AuthContext);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.rectangle1}></div>
        <div className={styles.rectangle2}></div>
        <div className={styles.rectangle3}></div>
        <h1 onClick={() => window.location.href = "/"}>Jobfinder</h1>
        <div className={styles.buttons}>
          { !isAuthenticated && <button className={styles.login} onClick={() => window.location.href = "/sign-in"} >Login</button>}
          { !isAuthenticated && <button className={styles.register} onClick={() => window.location.href = "/register"} >Register</button>}
          { isAuthenticated && <button className={styles.logout} onClick={handleLogout} >Logout</button>}
          { isAuthenticated && <p>Hello! Recruiter</p>}
          { isAuthenticated && <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="User Icon" />}
        </div>
      </div>
    </nav>
  );
}
