import React, { useEffect, useState } from "react";
import styles from "./Authentication.module.css";
import { register } from "../../../service/Authentication/auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try{
      const response = await fetch("http://localhost:3000/api/auth/register",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
      const data = await response.json();
      if(response.status === 200){
        alert(data.message);
        navigate("/sign-in");
      }
      else{
        alert(data.message);
      }
    }catch(err){
      alert(err.response.data);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheck = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>Create an account</h1>
        <p>Your personal job finder is here</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            required
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type="text"
            placeholder="Mobile"
            required
            name="mobile"
            onChange={handleChange}
            value={formData.mobile}
          />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            onChange={handleChange}
            value={formData.password}
          />
          <div>
            <input type="checkbox" id="terms" onChange={handleCheck} />
            <label htmlFor="terms">
              By creating an account, I agree to our terms of use and privacy
              policy
            </label>
          </div>
          <button type="submit" disabled={!checked}>
            Create Account
          </button>
        </form>
        <p>
          Already have an account? <a href="/sign-in">Sign In</a>
        </p>
      </div>
      <div className={styles.hero}>
        <h1>Your Personal Job Finder</h1>
      </div>
    </div>
  );
}
