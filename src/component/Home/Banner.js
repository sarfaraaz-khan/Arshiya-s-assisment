import React from "react";
import BannerImage from "../../assets/Frame.png";
import "./banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banerTextContainer">
        <h1>Lorem ipsum dolor sit amet,</h1>
        <h2>consectetur adipiscing elit</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <br /> elit. Nunc vulputate libero et velit interdum, ac aliquet odio
          <br /> mattis. Class aptent taciti sociosqu ad litora torquent per
          conubia
          <br /> nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
          <br /> condimentum lobortis. Ut commodo efficitur neque. Ut diam quam,
          <br /> semper iaculis condimentum ac, vestibulum eu nisl.
        </p>
        <button>Learn more</button>
      </div>
      <div className="banerImageContainer">
        <img src={BannerImage} />
      </div>
    </div>
  );
}

export default Banner;
