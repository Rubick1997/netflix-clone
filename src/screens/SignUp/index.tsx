import React, { useRef } from "react";
import { auth } from "../../firebase";
import styles from "./index.module.scss";

const SignUp = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const register = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (emailRef.current !== null && passwordRef.current !== null) {
      auth
        .createUserWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        )
        .then((authUser) => {
          console.log(authUser);
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  const signIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (emailRef.current !== null && passwordRef.current !== null) {
      auth
        .signInWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        )
        .then((authUser) => {
          console.log(authUser);
        })
        .catch((error) => alert(error.message));
    }
  };

  return (
    <div className={styles.signup}>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className={styles.signupGray}>New to Netflix? </span>
          <span className={styles.signupLink} onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
