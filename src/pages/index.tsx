import { Profile } from "../components/Profile";
import { ExperienceBar } from "../components/XpBar";
import { ChallengeBox } from "../components/ChallengeBox";
import { Countdown } from "../components/Countdown";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { GetServerSideProps } from "next";

import styles from "../../styles/pages/Home.module.css";

import Head from "next/head";
import { CountdownProvider } from "../context/CountdownContext";
import { ChallengesProvider } from "../context/ChallengeContext";

interface Homeprops {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: Homeprops) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
