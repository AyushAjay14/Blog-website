"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "./captures.module.css";

function Captures() {
  const countries = [
    {
      country: "morocco",
      img: "https://anywhereweroam.com/wp-content/uploads/2022/08/morocco-travel-guide.jpg",
    },
    {
      country: "namibia",
      img: "https://anywhereweroam.com/wp-content/uploads/2021/08/FA4A9314.jpg",
    },
    {
      country: "turkey",
      img: "https://anywhereweroam.com/wp-content/uploads/2019/09/Turkey-anywhere-we-roam-1.jpg",
    },
    {
      country: "south africa",
      img: "https://anywhereweroam.com/wp-content/uploads/2022/02/south-africa-travel-guides.jpg",
    },
    {
      country: "italy",
      img: "https://anywhereweroam.com/wp-content/uploads/2021/11/FA4A9006.jpg",
    },
    {
      country: "switzerland",
      img: "https://anywhereweroam.com/wp-content/uploads/2023/07/chapel-bridge-water-tower-lucerne-1.jpg",
    },
  ];

  const [key, setkey] = useState(0);
  return (
    <>
      <div
        className={styles.mainContainer}
        style={{ backgroundImage: `url(${countries[key].img})` }}>
        <ul className={styles.textContainer}>
          {countries.map((country, index) => {
            return (
              <li
                key={index}
                className={styles.country}
                onMouseEnter={() => setkey(index)}>
                {country.country}
              </li>
            );
          })}
        </ul>
        {/* <Image /> */}
      </div>
    </>
  );
}

export default Captures;
