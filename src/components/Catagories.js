import React from "react";
import styles from "./catagories.module.css";

const Catagories = () => {
  return (
    <div className={styles.container}>
      <div className={styles.catagoryContainer}>
        <div className={styles.textContainer}>
          <h3>Plate</h3>
          <span>Decoration Plates</span>
        </div>
      </div>
      <div className={styles.catagoryContainer}>
        <div className={styles.textContainer}>
          <h3>Plate</h3>
          <span>Decoration Plates</span>
        </div>
      </div>
      <div className={styles.catagoryContainer}>
        <div className={styles.textContainer}>
          <h3>Plate</h3>
          <span>Decoration Plates</span>
        </div>
      </div>
      <div className={styles.catagoryContainer}>
        <div className={styles.textContainer}>
          <h3>Plate</h3>
          <span>Decoration Plates</span>
        </div>
      </div>
    </div>
  );
};
export default Catagories;
