import React from "react";
import styles from "./index.module.scss";

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.loginBackground}>
        <img
          className={styles.loginLogo}
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className={styles.loginButton}>Sign In</button>
        <div className={styles.loginGradient}/>
      </div>
      <div className={styles.loginBody}></div>
    </div>
  );
};

export default Login;
