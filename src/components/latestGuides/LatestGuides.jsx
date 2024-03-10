import Image from "next/image";
import React from "react";
import styles from "./latest.module.css";

function LatestGuides() {
  const Guides = [
    {
      date: "4 Mar 2024",
      img: "https://anywhereweroam.com/wp-content/uploads/2023/10/day-trips-from-london-1-uai-750x1000.webp",
      title: "20 Excellent Day Trip from London",
    },
    {
      date: "15 Feb 2024",
      img: "https://anywhereweroam.com/wp-content/uploads/2023/05/places-to-stay-london-2-uai-750x1000.jpg",
      title: "Best Places To Stay in london(2024 Guide) + Map",
    },
    {
      date: "5 Feb 2025",
      img: "https://anywhereweroam.com/wp-content/uploads/2023/01/monument-valley-uai-750x1000.jpg",
      title:
        "Complete guide to visiting monument valley in 2024 (+ Tips & tours)",
    },
    {
      date: "23 jan 2024",
      img: "https://anywhereweroam.com/wp-content/uploads/2024/01/Utah-national-parks-road-trip-uai-750x1000.webp",
      title: "2-Week northern arizona & utah National Parks road trip",
    },
  ];
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.headingContainer}>
          <span>our latest guides</span>
        </div>
        <div className={styles.guideContainer}>
          {Guides.map((guide) => {
            return (
              <div>
                <div className={styles.image}>
                  <Image src={guide.img} width={280} height={380} />
                </div>
                <div className={styles.textHolder}>
                  <div className={styles.date}>
                    <p>{guide.date}</p>
                  </div>
                  <div className={styles.titleHolder}>
                    <p>{guide.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default LatestGuides;
