import { useContext } from "react";
import styles from "../../styles/components/Profile.module.css";
import { ChallengesContext } from "../context/ChallengeContext";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div>
      <div className={styles.profileContainer}>
        <img src="https://github.com/ian-aquino-bianquini.png" alt="Ian" />
        <div>
          <strong>Ian de Aquino Bianquini</strong>
          <p>
            <img src="icons/level.svg" alt="Level" />
            Level {level}
          </p>
        </div>
      </div>
    </div>
  );
}
