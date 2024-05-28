import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../UI/Navbar/Navbar";
// import Header from '../../UI/Header/Header'
import styles from "./JobDetails.module.css";
import { FaMoneyBill } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { AuthContext } from "../../../AuthContext/AuthContext";

export default function JobDetails() {
  const url = new URL(window.location.href);
  const id = url.pathname.split("/")[2];
  const [jobDetails, setJobDetails] = useState({
    title:"",
    companyName: "",
    location:"",
    salary: "",
    description: "",
    locationType:"",
    jobType:"",
    skills:[],
    logo: "",
    about:"",
    information:""
  });

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/job/view/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setJobDetails(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchJobDetails();
  }, [id]);

  const { isAuthenticated } = useContext(AuthContext);

  const handleNavigate = () => {
    window.location.href = `/edit/${id}`;
  }

  const descriptionWithLineBreaks = jobDetails.description.replace(/\n/g, '<br>');

  return (
    <>
      <Navbar />
      {jobDetails && (
        <div className={styles.header}>
          <h2>
            {jobDetails.title} {jobDetails.locationType} job/internship at{" "}
            {jobDetails.companyName}
          </h2>
        </div>
      )}
      {jobDetails && (
        <div className={styles.container}>
          <div className={styles.types}>
            <div>1w ago</div>
            &#x2022;
            <div> {jobDetails.jobType} </div>
            <img src={jobDetails.logo} />
            <div> {jobDetails.companyName} </div>
          </div>
          <div className={styles.title}>
            <div>
              <h1>{jobDetails.title}</h1>
              <span> {jobDetails.location} | India </span>
            </div>
            { isAuthenticated && <button onClick={handleNavigate}>Edit Job</button>}
          </div>
          <div className={styles.salary}>
            <div>
              <div className={styles.icon}>
                <FaMoneyBill />
                Stipend
              </div>
              <p> Rs {jobDetails.salary}/month</p>
            </div>
            <div>
              <div className={styles.icon}>
                <FaCalendar /> Duration
              </div>
              <p>6 months</p>
            </div>
          </div>
          <div className={styles.about}>
            <h2>About Company</h2>
            <p>{jobDetails.about}</p>
          </div>
          <div className={styles.description}>
            <h2>About the job/internship</h2>
            <p dangerouslySetInnerHTML={{ __html: descriptionWithLineBreaks }} />
          </div>
          <div className={styles.skills}>
            <h2>Skill(s) required</h2>
            <div className={styles.skill}>
              {jobDetails.skills.map((skill, index) => (
                <div className={styles.skillCapsule} key={index}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.information}>
            <h2>Additional Information</h2>
            <p>{jobDetails.information}</p>
          </div>
        </div>
      )}
    </>
  );
}
