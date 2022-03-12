import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div>
          <img className={styles.logo} src="./images/logo.png" alt="" />
        </div>
        <div className={styles.Services}>
          <h2>Service</h2>
          <p> Delivery Service</p>
          <p> Installation Service</p>
          <p> Measuring Service</p>
          <p> Customer Service</p>
          <p> Recycle Program</p>
        </div>
        <div className={styles.Link}>
          <h2>Links</h2>
          <p> Buying Guides</p>
          <p> Planners</p>
          <p> Size guide - Beds & mattresses</p>
          <p> FAQ's</p>
          <p> Gift Card</p>
        </div>
        <div className={styles.Support}>
          <h2>Support</h2>
          <p> Monday to Friday:9-20</p>
          <p> Saturday to Sunday: closed</p>
          <p> antiq@qode.com</p>
          <p> +1 333 555</p>
        </div>
        <div className={styles.SocialMediaLinks}></div>
      </div>
    </>
  );
};

export default Footer;
