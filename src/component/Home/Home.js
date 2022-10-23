import React from "react";
import "./home.css";
import Banner from "./Banner";
import HomeBody from "./HomeBody";
import Portfolio from "./Portfolio";
import Awards from "./Awards";

function Home() {
  return (
    <div className="home">
      <Banner />
      <HomeBody />
      <Portfolio />
      <Awards />
    </div>
  );
}

export default Home;
