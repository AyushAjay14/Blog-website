"use client";

import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
function Navbar() {
  const links = ["Explore", "Places", "Blog", "About", "Resources"];
  const icons = ["facebook", "twitter", "instagram"];
  const [Yoffset, setYoffset] = useState(0);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.relativeContainer}>
        <div
          className={
            !scrollPosition ? styles.container : styles.whiteContainer
          }>
          <div className={styles.logoContainer}>
            {!scrollPosition ? (
              <Image src="/logo.png" width={140} height={50} />
            ) : (
              <Image src="/logo-black.png" width={140} height={50} />
            )}
          </div>
          <div className={styles.linkContainer}>
            <ul className={styles.links}>
              {links.map((link, index) => {
                return (
                  <li
                    key={index}
                    className={!scrollPosition ? styles.whli : styles.bkli}>
                    {link}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.icons}>
            {icons.map((icon, index) => {
              return (
                <i
                  key={index}
                  className={`bx bxl-${icon} ${
                    !scrollPosition ? styles.boxicons : styles.Bkboxicons
                  }`}></i>
              );
            })}
            <i
              className={`bx bx-search-alt-2 ${
                !scrollPosition ? styles.boxicons : styles.Bkboxicons
              }`}></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
