import Image from "next/image";
import React from "react";
import styles from "./welcome.module.css";

function Welcome() {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <Image src="/welcome.webp" width={552} height={552} />
          <div className={styles.rightContainer}>
            <div>
              <span className={styles.title}>Welcome to</span>
              <span className={styles.title}>Anywhere We Roam</span>
            </div>
            <div className={styles.text}>
              <p>
                Anywhere We Roam is a resource to help you travel better,
                featuring epic road trips, stunning hiking destinations, and our
                favourite cities.
              </p>
              <p>Ayush Ajay.</p>
            </div>
          </div>
        </div>
        <div className={styles.dividerWrapper}>
          <div className={styles.divider}></div>
          <div className={styles.arrow}>
            <Image src="/chevron.png" width={50} height={50} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
