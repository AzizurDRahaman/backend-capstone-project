import React, { useEffect, useState } from "react";
import styles from "./Authentication.module.css";
import { login } from "../../../service/Authentication/auth";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      if(response.status === 200){
        alert(`Welcome, ${data.name}`);
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);
      }
      else{
        alert(data.message);
      }
    } catch (err) {
      alert(err.message);
    }
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
