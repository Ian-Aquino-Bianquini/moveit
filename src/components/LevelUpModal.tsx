import { useContext } from "react";
import styles from "../../styles/components/LevelupModal.module.css";
import { ChallengesContext } from "../context/ChallengeContext";

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns!!</strong>

        <p>Você alcançou um novo level.</p>
        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </div>
    </div>
  );
}
