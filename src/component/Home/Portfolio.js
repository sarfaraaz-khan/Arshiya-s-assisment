import React from "react";
import PortfolioCards from "./PortfolioCards";
import "./portfolio.css";

function Portfolio() {
  return (
    <div className="portfolioContainer">
      <div className="title">
        <h1>
          <span>Our</span>FOUNDERS
        </h1>
      </div>
      <div className="cardContainer">
        <PortfolioCards />
      </div>
    </div>
  );
}

export default Portfolio;
