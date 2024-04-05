import React, { useState } from 'react'
import styles from './LoginView.module.css'

function LoginView() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {

    };

  return (
    <div className={styles["login-container"]}>
        <div className={styles['login-wrapper']}>
      <form className={styles["login-form"]} onSubmit={handleLogin}>
        <p className={styles['title']}>LOGIN</p>
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
            placeholder='Type your password'
            id="password"
            name="password"
            value={password}
            onChange={(e) => {
                setPassword(e.target.value);
            }}
            required
          />
        </div>
        <div className={styles['button-wrapper']}>
            <button type="submit" className={styles["login-button"]}>Sign In</button>
            <a href='/register'>Or Sign Up</a>
        </div>
      </form>
      </div>
    </div>
  )
}

export default LoginView
