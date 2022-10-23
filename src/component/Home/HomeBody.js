import react from "react";
import "./homeBody.css";
import elipse4 from "../../assets/elipse4.png";
import elipse5 from "../../assets/elipse5.png";

const homeBody = () => {
  return (
    <div className="homeBodyContainer">
      <div className="homebody">
        <div className="rightImageContainer">
          <img src={elipse4} />
        </div>
        <div className="lefttextContainer">
          <h3>
            Our Mission
            <p>
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit. Nunc vulputate libero et velit
              <br />
              interdum, ac aliquet odio mattis. Class aptent
              <br />
              taciti sociosqu ad litora torquent per conubia nostra,
              <br />
              per inceptos himenaeos. Curabitur tempus urna at <br />
              turpis condimentum lobortis. Ut commodo efficitur neque.
              <br />
              Ut diam quam, semper iaculis condimentum ac,
              <br />
              vestibulum eu nisl.
            </p>
          </h3>
        </div>
      </div>
      <div className="homebody">
        <div className="lefttextContainer">
          <h3>
            Our Mission
            <p>
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit. Nunc vulputate libero et velit
              <br />
              interdum, ac aliquet odio mattis. Class aptent
              <br />
              taciti sociosqu ad litora torquent per conubia nostra,
              <br />
              per inceptos himenaeos. Curabitur tempus urna at <br />
              turpis condimentum lobortis. Ut commodo efficitur neque.
              <br />
              Ut diam quam, semper iaculis condimentum ac,
              <br />
              vestibulum eu nisl.
            </p>
          </h3>
        </div>
        <div className="rightImageContainer">
          <img src={elipse5} />
        </div>
      </div>
    </div>
  );
};
export default homeBody;
