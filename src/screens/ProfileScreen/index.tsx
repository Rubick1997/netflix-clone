import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectRole } from "../../features/roleSlice";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import PlansScreen from "../PlansScreen";
import styles from "./index.module.scss";

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  const [emailInput, setEmailInput] = useState(user.email);
  const [isEditing, setIsEditing] = useState(false);
  const currentPlan = useSelector(selectRole);

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
            <div className={styles.profileInput}>
              <input
                disabled={!isEditing}
                type="text"
                value={emailInput}
                onChange={(e) => {
                  setEmailInput(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  setIsEditing((prev) => !prev);
                }}
              >
                {isEditing ? "Save" : "Edit"}
              </button>
            </div>
            <div className={styles.profilePlans}>
              <h3>Plans {currentPlan && `(Current Plan: ${currentPlan})`}</h3>
              <PlansScreen />
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
