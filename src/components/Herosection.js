import React from "react";

import styles from "./herosection.module.css";

const Herosection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.placeholder}>
        <h1>All For Your Home</h1>
        <h5>Find best quality furniture for all of your requirements </h5>
        <button>See More</button>
      </div>
      <img
        className={styles.chairImage}
        src="./images/heroBackground.png"
        alt=""
      />
    </div>
  );
};

export default Herosection;
