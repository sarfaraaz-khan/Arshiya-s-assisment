import React from "react";
import "./Award.css";
import award from "../../assets/award.png";
import award2 from "../../assets/award1.png";
import award3 from "../../assets/award3.png";
import award4 from "../../assets/award4.png";

function Awards() {
  return (
    <div className="award">
      <h1>Awards And Achievment</h1>
      <div className="awards">
        <div className="card">
          <img src={award3} />
          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class{" "}
          </p>
        </div>
        <div className="card">
          <img src={award} />
          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class{" "}
          </p>
        </div>
        <div className="card">
          <img src={award4} />
          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class{" "}
          </p>
        </div>
        <div className="card">
          <img src={award2} />
          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Awards;
