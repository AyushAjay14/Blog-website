import React from "react";
import styles from "./places.module.css";

function Places() {
  const items = [
    {
      img: "https://anywhereweroam.com/wp-content/uploads/2022/11/destinations-in-the-uk-uai-800x1000.jpg ",
      title: "24 Essential Places To Visit in The UK + What To Do & map",
    },
    {
      img: "https://anywhereweroam.com/wp-content/uploads/2023/01/forest-gump-monument-valley-uai-800x1000.jpg",
      title: "best road trips in the world for 2024",
    },
    {
      img: "https://anywhereweroam.com/wp-content/uploads/2023/12/where-to-travel-2024-uai-800x1000.webp",
      title: "15 best places to visit in 2024 according to travel experts",
    },
  ];
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.headingContainer}>
          <span>Find some inspiration for your</span>
          <span>next big getaway</span>
        </div>
        <div className={styles.textContainer}>
          <p>
            Embark on an adventure across the UK, find a soul-satisfying road
            trip, or visit a budget-friendly destination in 2024.
          </p>
        </div>
        <div className={styles.itemHolder}>
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className={styles.item}
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(11, 11, 11, 0.52)), url(${item.img})`,
                }}>
                <p className={styles.itemText}>{item.title}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.customShape}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
              d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
              className={styles.shapeFill}></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default Places;
