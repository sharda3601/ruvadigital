import React from "react";
import "./Services.css";
import Arrow2 from "./Arrow2";

const Services = () => {
  return (
    <section className="services ">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service">
          <h3>Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Netus scelerisque congue
            cursus diam consectetur non cursus euismod arcu.Lorem ipsum dolor
            sit amet consectetur. Netus scelerisque congue cursus diam
            consectetur non cursus euismod arcuLorem ipsum dolor sit amet
            consectetur. A
          </p>
        </div>
        <div className="service">
          <h3>UI/UX</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Netus scelerisque congue
            cursus diam consectetur non cursus euismod arcu.Lorem ipsum dolor
            sit amet consectetur. Netus scelerisque congue cursus diam
            consectetur non cursus euismod arcuLorem ipsum dolor sit amet
            consectetur. Amet netus ma{" "}
          </p>
        </div>
        <div className="service">
          <h3>Business</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Netus scelerisque congue
            cursus diam consectetur non cursus euismod arcu.Lorem ipsum dolor
            sit amet consectetur. Netus scelerisque congue cursus diam
            consectetur non cursus euismod arcuLorem ipsum dolor sit amet
            consectetur. Amet netus{" "}
          </p>
        </div>
        <div className="service branding">
          <h3>Branding</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Netus scelerisque congue
            cursus diam consectetur non cursus euismod arcu.Lorem ipsum dolor
            sit amet consectetur. Netus scelerisque congue cursus diam
            consectetur non cursus euismod arcuLorem ipsum dolor sit amet
            consectetur. Amet netus{" "}
          </p>
        </div>
      </div>
      <Arrow2 />
    </section>
  );
};

export default Services;
