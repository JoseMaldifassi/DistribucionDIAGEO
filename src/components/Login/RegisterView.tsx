import React, { useState } from 'react'
import styles from './LoginView.module.css'

function RegisterView() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleLogin = () => {

    };

  return (
    <div className={styles["login-container"]}>
        <div className={styles['login-wrapper']}>
      <form className={styles["login-form"]} onSubmit={handleLogin}>
        <p className={styles['title']}>CREATE ACCOUNT</p>
        <div className={styles["form-group"]}>
          <label htmlFor="username">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder='Type your email'
            value={username}
            onChange={(e) => {
                setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder='Type your username'
            value={username}
            onChange={(e) => {
                setUsername(e.target.value);
            }}
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Type your password'
            value={password}
            onChange={(e) => {
                setPassword(e.target.value);
            }}
            required
          />
        </div>
        <div className={styles['button-wrapper']}>
            <button type="submit" className={styles["login-button"]}>Sign Up</button>
            <a href='/login'>Or Sign In</a>
        </div>
      </form>
      </div>
    </div>
  )
}

export default RegisterView
