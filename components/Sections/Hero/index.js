/* eslint-disable */
import React from "react";
import styles from "./Hero.module.css";
import Vector from "../../../assets/images/Vector.svg";

const Hero = () => {
  return (
    <div className={styles.hero__container}>
      <div className={styles.hero__content}>
        <div className={styles.hero__heading__container}>
          <h1 className={styles.hero__heading}>
            Your Next Project <span>Done Right</span>
          </h1>
          <img
            className={styles.hero__heading__underline}
            src={Vector.src}
            alt="underline"
          />
        </div>
        <div className={styles.hero__content__highlights}>
          <div className={styles.hero__cards}>
            <h2>3 Years</h2>
            <h5>of Experience</h5>
          </div>
          <div className={styles.hero__cards}>
            <h2>10+</h2>
            <h5>Projects Done</h5>
          </div>
          <div className={styles.hero__cards}>
            <h2>5+</h2>
            <h5>Happy Clients</h5>
          </div>
          <div className={styles.hero__cards}>
            <h2>1</h2>
            <h5>Goal</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
