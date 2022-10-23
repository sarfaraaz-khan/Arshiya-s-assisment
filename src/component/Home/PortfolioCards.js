import React from "react";
import TestimonialCard from "material-testimonial-card";
import elipse2 from "../../assets/elipse2.png";
import elipse1 from "../../assets/elipse1.png";
import elipse3 from "../../assets/elipse3.png";
import "./PortfolioCards.css";

function PortfolioCards() {
  return (
    <div className="cardContainer">
      <TestimonialCard
        project={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class "
        }
        image={elipse2}
        name={"Testimonial card"}
      />
      <TestimonialCard
        project={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class "
        }
        image={elipse1}
        name={"Testimonial card"}
      />
      <TestimonialCard
        project={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class "
        }
        image={elipse3}
        content={"none"}
        name={"Testimonial card"}
      />
    </div>
  );
}

export default PortfolioCards;
