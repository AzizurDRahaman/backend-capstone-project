import React, { useEffect, useState } from 'react'
import styles from './Authentication.module.css'

export default function Register() {

    const [ checked, setChecked ] = useState(false);

    const handleCheck = (e) => {
        setChecked(e.target.checked);
    }

  return (
    <div className={styles.container}>
        <div className={styles.form}>
          <h1>Create an account</h1>
          <p>Your personal job finder is here</p>
          <form>
            <input type="text" placeholder="Name" required name='name' />
            <input type="email" placeholder="Email" required name='email' />
            <input type="text" placeholder="Mobile" required name='mobile' />
            <input type="password" placeholder="Password" required name='password' />
            <div>
                <input type='checkbox' id='terms' onChange={handleCheck} />
                <label htmlFor='terms'>By creating an account, I agree to our terms of use and privacy policy</label>
            </div>
            <button type="submit" disabled={!checked} >Create Account</button>
          </form>
          <p>Already have an account? <a href="/sign-in">Sign In</a></p>
        </div>
        <div className={styles.hero}>
            <h1>
            Your Personal Job Finder
            </h1>
        </div>
    </div>
  )
}
