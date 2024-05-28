import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthContext/AuthContext";
import styles from "./Authentication.module.css";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { handleLogin } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>Already have an account?</h1>
        <p>Your personal job finder is here</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            onChange={handleChange}
            value={formData.password}
          />
          <button type="submit">Sign In</button>
        </form>
        <p>
          Don&apos;t have an account? <a href="/register">Sign Up</a>
        </p>
      </div>
      <div className={styles.hero}>
        <h1>Your Personal Job Finder</h1>
      </div>
    </div>
  );
}
