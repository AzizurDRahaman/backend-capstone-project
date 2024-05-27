import React from 'react';
import styles from './AddJobs.module.css';

export default function AddJobs() {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>Add Job Description</h1>
        <form>
          <div className={styles.field}>
            <label htmlFor='companyName'>Company Name</label>
            <input type="text" id='companyName' name='companyName' placeholder='Enter your company name here' />
          </div>
          <div className={styles.field}>
            <label htmlFor='logo'>Add logo URL</label>
            <input type="text" id='logo' name='logo' placeholder='Enter the link' />
          </div>
          <div className={styles.field}>
            <label htmlFor='title'>Job Position</label>
            <input type="text" id='title' name='title' placeholder='Enter job position' />
          </div>
          <div className={styles.field}>
            <label htmlFor='salary'>Monthly Salary</label>
            <input type="text" id='salary' name='salary' placeholder='Enter Amount in rupees' />
          </div>
          <div className={styles.field}>
            <label htmlFor='jobType'>Job Type</label>
            <select id='jobType' name='jobType'>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor='locationType'>Remote / Office</label>
            <select id='locationType' name='locationType'>
              <option value="Remote">Remote</option>
              <option value="Office">Office</option>
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor='location'>Location</label>
            <input type="text" id='location' name='location' placeholder='Enter Location' />
          </div>
          <div className={styles.field}>
            <label htmlFor='description'>Job Description</label>
            <textarea id='description' name='description' placeholder='Type the job description' />
          </div>
          <div className={styles.field}>
            <label htmlFor='about'>About Company</label>
            <textarea id='about' name='about' placeholder='Type about your company' />
          </div>
          <div className={styles.field}>
            <label htmlFor='skills'>Skills Required</label>
            <input type="text" id='skills' name='skills' placeholder='Enter the must have skills' />
          </div>
          <div className={styles.field}>
            <label htmlFor='information'>Additional Information</label>
            <input type="text" id='information' name='information' placeholder='Enter the additional information' />
          </div>
          <div className={styles.buttons}>
            <button type='button'>Cancel</button>
            <button type='submit'> + Add Job</button>
          </div>
        </form>
      </div>
      <div className={styles.hero}>
        <h1>Recruiter add job details here</h1>
      </div>
    </div>
  );
}
