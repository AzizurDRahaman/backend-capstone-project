/* eslint-disable react/prop-types */
import React from "react";
import styles from "./JobCard.module.css";
import { FaUserGroup } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import { useNavigate } from "react-router-dom";

export default function JobCard({ job }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/job/${job._id}`);
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.info}>
          <div className={styles.image}>
            <img src={job.logo} alt="company logo" />
          </div>
          <div className={styles.details}>
            <h3>{job.title}</h3>
            <div className={styles.details2}>
              <div>
                <FaUserGroup /> 11-50
              </div>
              <div>
                <FaRupeeSign /> {job.salary}
              </div>
              <div>
                {" "}
                <ReactCountryFlag
                  countryCode="IN"
                  style={{
                    fontSize: "1em",
                  }}
                  svg
                  cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                  cdnSuffix="svg"
                  title="US"
                />{" "}
                {job.location}
              </div>
            </div>
            <div className={styles.jobType}>
              <span>{job.locationType}</span>
              <span>{job.jobType}</span>
            </div>
          </div>
        </div>
        <div className={styles.skills}>
          <div>
            {job.skills.map((skill, index) => (
              <span className={styles.skill} key={index}>
                {skill}
              </span>
            ))}
          </div>
          <div className={styles.buttons} >
            <button onClick={handleNavigate} >View Details</button>
            {/* <button>Clear</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
