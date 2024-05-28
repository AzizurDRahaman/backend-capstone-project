import React, { useEffect, useState } from 'react';
import styles from './AddJobs.module.css';
import { useNavigate } from 'react-router-dom';

export default function AddJobs() {
  const url = new URL(window.location.href);
  const isEdit = url.pathname.includes("edit");

  const [ formData, setFormData ] = useState({
    title:"",
    companyName: "",
    location:"",
    salary: "",
    description: "",
    locationType:"",
    jobType:"",
    skills:"",
    logo: "",
    about:"",
    information:""
  });

  const handleChange = (e) => {
    setFormData((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  };
  const navigate = useNavigate();
  useEffect(() => {
    const checkTokenAndFetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      if (isEdit) {
        const id = url.pathname.split("/")[2];
        console.log(id);

        try {
          const response = await fetch(`http://localhost:3000/api/job/view/${id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }

          const data = await response.json();
          const skills = data.skills.join(",");
          setFormData({ ...data, skills });
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    checkTokenAndFetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(isEdit){
      const id = url.pathname.split("/")[2];
      try{
        const response = await fetch(`http://localhost:3000/api/job/update/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if(response.status === 200){
          alert(data.message);
          navigate("/");
        }
        else{
          alert(data.message);
        }
      }
      catch(err){
        console.log(err);
      }
    }
    else{
      try{
        const response = await fetch("http://localhost:3000/api/job/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if(response.status === 200){
          alert(data.message);
          navigate("/");
        }
        else{
          alert(data.message);
        }
      }
      catch(err){
        console.log(err);
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>Add Job Description</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor='companyName'>Company Name</label>
            <input type="text" id='companyName' name='companyName' placeholder='Enter your company name here' value={formData.companyName} onChange={handleChange} />
          </div>
          <div className={styles.field}>
            <label htmlFor='logo'>Add logo URL</label>
            <input type="text" id='logo' name='logo' placeholder='Enter the link' value={formData.logo} onChange={handleChange} />
          </div>
          <div className={styles.field}>
            <label htmlFor='title'>Job Position</label>
            <input type="text" id='title' name='title' placeholder='Enter job position' value={formData.title} onChange={handleChange} />
          </div>
          <div className={styles.field}>
            <label htmlFor='salary'>Monthly Salary</label>
            <input type="text" id='salary' name='salary' placeholder='Enter Amount in rupees' value={formData.salary} onChange={handleChange} />
          </div>
          <div className={styles.field}>
            <label htmlFor='jobType'>Job Type</label>
            <select id='jobType' name='jobType' value={formData.jobType} onChange={handleChange}>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor='locationType'>Remote / Office</label>
            <select id='locationType' name='locationType' value={formData.locationType} onChange={handleChange}>
              <option value="Remote">Remote</option>
              <option value="Office">Office</option>
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor='location'>Location</label>
            <input type="text" id='location' name='location' placeholder='Enter Location' value={formData.location} onChange={handleChange} />
          </div>
          <div className={`${styles.field} ${styles.textarea}`}>
            <label htmlFor='description'>Job Description</label>
            <textarea id='description' name='description' placeholder='Type the job description' value={formData.description} onChange={handleChange} />
          </div>
          <div className={`${styles.field} ${styles.textarea}`}>
            <label htmlFor='about'>About Company</label>
            <textarea id='about' name='about' placeholder='Type about your company' value={formData.about} onChange={handleChange} />
          </div>
          <div className={styles.field}>
            <label htmlFor='skills'>Skills Required</label>
            <div className={styles.skills}>
              <input type="text" id='skills' name='skills' placeholder='Enter the must have skills' value={formData.skills} onChange={handleChange} />
              <div className={styles.skillList}>
              {formData.skills
                .split(",")
                .filter(skill => skill.trim() !== "") // Filter out empty skills
                .map((skill, idx) => (
                  <span className={styles.skill} style={{marginRight: "5px"}} key={idx}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.field}>
            <label htmlFor='information'>Additional Information</label>
            <input type="text" id='information' name='information' placeholder='Enter the additional information' value={formData.information} onChange={handleChange} />
          </div>
          <div className={styles.buttons}>
            <button type='button'>Cancel</button>
            { isEdit ? <button type='submit'>Update Job</button> : <button type='submit'> + Add Job</button>}
          </div>
        </form>
      </div>
      <div className={styles.hero}>
        <h1>Recruiter add job details here</h1>
      </div>
    </div>
  );
}
