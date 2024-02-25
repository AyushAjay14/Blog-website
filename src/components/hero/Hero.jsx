import React from "react";
import styles from "./hero.module.css";

function Hero() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <span className={styles.mainheading}>Anywhere We Roam</span>
          <span className={styles.subheading}>the persuit of adventure</span>
        </div>
      </div>
    </>
  );
}

export default Hero;
