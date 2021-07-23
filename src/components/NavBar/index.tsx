import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./index.module.scss";

const NavBar = () => {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`${styles.nav} ${show && styles.navBlack}`}>
      <div className={styles.navContents}>
        <img
          onClick={() => {
            history.push("/");
            window.scroll(0, 0);
          }}
          className={styles.navLogo}
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix logo"
        />
        <img
          onClick={() => history.push("/profile")}
          className={styles.navAvatar}
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="netflix avatar"
        />
      </div>
    </div>
  );
};

export default NavBar;
