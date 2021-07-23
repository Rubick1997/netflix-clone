import React, { useState } from "react";
import SignUp from "../SignUp";
import styles from "./index.module.scss";

const Login = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className={styles.login}>
      <div className={styles.loginBackground}>
        <img
          className={styles.loginLogo}
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className={styles.loginButton} onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className={styles.loginGradient} />
      </div>
      <div className={styles.loginBody}>
        {signIn ? (
          <SignUp />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>
            <div className={styles.loginInput}>
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className={styles.loginInputButton}
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
