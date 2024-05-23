import React, { useEffect, useState } from 'react'
import styles from './Authentication.module.css'

export default function SignIn() {

  return (
    <div className={styles.container}>
        <div className={styles.form}>
          <h1>Already have an account?</h1>
          <p>Your personal job finder is here</p>
          <form>
            <input type="email" placeholder="Email" required name='email' />
            <input type="password" placeholder="Password" required name='password' />
            <button type="submit">Sign In</button>
          </form>
          <p>Don&apos;t have an account? <a href="/register">Sign Up</a></p>
        </div>
        <div className={styles.hero}>
            <h1>
            Your Personal Job Finder
            </h1>
        </div>
    </div>
  )
}
