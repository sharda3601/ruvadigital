import React from "react";
import Slider from "react-slick";
import "./Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo from "../images/Logo.png";

const testimonials = [
  {
    name: "Romesh Rao",
    date: "May 23, 2024",
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur. Tristique congue feugiat scelerisque enim vehicula morbi nunc. Et orci.",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/GammaAnd_SIZE.png/970px-GammaAnd_SIZE.png", // Add path to avatar images
  },
  {
    name: "Manish Rao",
    date: "May 23, 2024",
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur. Tristique congue feugiat scelerisque enim vehicula morbi nunc. Et orci.",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/GammaAnd_SIZE.png/970px-GammaAnd_SIZE.png", // Add path to avatar images
  },
  {
    name: "Romesh Rao",
    date: "May 23, 2024",
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur. Tristique congue feugiat scelerisque enim vehicula morbi nunc. Et orci.",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/GammaAnd_SIZE.png/970px-GammaAnd_SIZE.png", // Add path to avatar images
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials-container">
      <div className="ruvalogo">
        <img src={Logo} alt="Ruva Logo" />
      </div>
      <div className="testimonials-content">
        <h2 className="header-center">What Our Clients Say</h2>
        <p className="para-center">
          Lorem ipsum dolor sit amet consectetur. Eget sit orci condimentum
          velit netus montes ac duis nisi. Integer interdum dignissim justo dui
          sed. Leo lectus urna ut vitae tristique ac nisi vel ut.
        </p>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <div className="testimonial-header">
                <img src={testimonial.avatar} className="avatar" />
                <div>
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.date}</p>
                </div>
                <div className="google-icon">
                  <img src={require("../images/google.png")} alt="Google" />
                </div>
              </div>
              <p>{testimonial.text}</p>
              <div className="rating">
                {"★".repeat(testimonial.rating)}
                {"☆".repeat(5 - testimonial.rating)}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#000",
        marginRight: 15,
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#000",
        marginLeft: 15,
      }}
      onClick={onClick}
    />
  );
};

export default Testimonials;
