import { monsterrat } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import styles from "./roadtrips.module.css";
function RoadTrips() {
  const images = [
    {
      img: "https://anywhereweroam.com/wp-content/uploads/2021/06/dolomites-road-trip-guide-1.jpg",
      location: "Italy",
      desc: "7-Day Dolomites itinerary - A complete road trip Guide",
    },
    {
      img: "https://anywhereweroam.com/wp-content/uploads/2023/04/12-apostles-great-ocean-road.jpg",
      location: "Australia",
      desc: "complete great ocean road itinerary + Maps, Tips & Accomodation",
    },
    {
      img: "https://anywhereweroam.com/wp-content/uploads/2020/12/places-to-visit-morocco-14.jpg",
      location: "Morocco",
      desc: "10-Day Morocco itinerary - road trip guide + map",
    },
    {
      img: "https://anywhereweroam.com/wp-content/uploads/2019/02/namibia-road-trip-itinerary-1.jpg",
      location: "Nambia",
      desc: "Namibia Road Trip: 2-Week Namibia Itinerary + Maps & Tips",
    },
  ];
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.textContainer}>
          <p className={`${styles.titleText}  ${monsterrat.className}`}>
            Road Trips
          </p>
          <p className={styles.titleDesc}>
            Take an epic road trip through deserts, mountains & canyons
          </p>
          <p className={styles.normalDesc}>
            Experience sublime scenery, wildlife encounters and diverse cultures
            on our favourite road trips.
          </p>
        </div>
        <div className={styles.imagesContainer}>
          {/* {images.map((image) => {
            return (
              <Image
                src={image}
                width={759}
                height={506}
                className={styles.image}
              />
            );
          })} */}
          {images.map((image) => {
            return (
              <div
                className={styles.imageContainer}
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 55%, rgba(43,38,42,1) 100%), url(${image.img})`,
                }}>
                <div className={styles.infoContainer}>
                  <div className={styles.location}>{image.location}</div>
                  <div className={styles.description}>{image.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default RoadTrips;
