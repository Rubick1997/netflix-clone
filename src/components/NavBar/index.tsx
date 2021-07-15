import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";

const NavBar = () => {
  const [show, handleShow] = useState(false);

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
          className={styles.navLogo}
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix logo"
        />
        <img
          className={styles.navAvatar}
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="netflix avatar"
        />
      </div>
    </div>
  );
};

export default NavBar;
