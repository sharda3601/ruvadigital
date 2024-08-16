import React from "react";
import "./MarketingSection.css";
import m1 from "../images/m1.png";
import m2 from "../images/m2.png";
import Arrow4 from "./Arrow4";
import Arrow3 from "./Arrow3";

const MarketingSection = () => {
  return (
    <div className="marketing-section">
      <div className="section-header">
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p>
          Adipiscing semper felis eros felis. Arcu integer eu nulla a lacus.
        </p>
      </div>
      <div className="section-content">
        <div className="content-item">
          <div className="image-wrapper">
            <img src={m2} alt="Description 1" />
          </div>
          <div className="text-wrapper1">
            <h2>
              We Craft Experience For Business To Help Reach Our Customers
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Varius venenatis at sit
              ipsum. Nec ultricies ultrices diam nibh viverra pellentesque.
              Egestas scelerisque morbi consequat tellus.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <Arrow3 />
      <div className="content-item">
        <div className="text-wrapper">
          <h2>Business Has Only Two Functions - Marketing And Innovations.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Varius venenatis at sit
            ipsum. Nec ultricies ultrices diam nibh viverra pellentesque.
            Egestas scelerisque morbi consequat tellus.
          </p>
          <button>Learn More</button>
        </div>
        <div className="image-wrapper">
          <img src={m1} alt="Description 2" />
        </div>
      </div>
      <Arrow4 />
    </div>
  );
};

export default MarketingSection;
