import React from "react";
import styles from "./blueBanner.module.css";

const BlueBanner = () => {
  return (
    <div className={styles.bluebanner}>
      <h1 className={styles.title}>Express Delivery in just 24 hrs</h1>
      <button className={styles.blueBannerBtn}>Order Now</button>
    </div>
  );
};
export default BlueBanner;
