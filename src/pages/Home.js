import React from "react";
import styles from "./home.module.css";

import Herosection from "../components/Herosection";
import ProductsOfTheWeek from "../components/ProductsOfTheWeek";
import Catagories from "../components/Catagories";
import UpcomingCollections from "../components/UpcomingCollections";
import Features from "../components/Features";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className={styles.container}>
      <Herosection />
      <ProductsOfTheWeek />
      <Catagories />
      <UpcomingCollections />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
