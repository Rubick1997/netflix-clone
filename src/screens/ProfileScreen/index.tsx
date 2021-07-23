import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import styles from "./index.module.scss";

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  const [emailInput, setEmailInput] = useState(user.email);
  return (
    <div className={styles.profile}>
      <div className={styles.profileBody}>
        <h1>Edit Profile</h1>
        <div className={styles.profileInfo}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className={styles.profileDetails}>
            <input
              type="text"
              value={emailInput}
              onChange={(e) => {
                setEmailInput(e.target.value);
              }}
            />
            <div className={styles.profilePlans}>
              <h3>Plans</h3>
              <button
                onClick={() => auth.signOut()}
                className={styles.profileSignOut}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
