import React, { useState } from "react";
import "./Jayesh.css";

const containerContents = [
  "https://i.pinimg.com/1200x/c9/4c/48/c94c487b4f5cf8126d7e31c11fa166c6.jpg",
  "https://i.pinimg.com/1200x/c9/4c/48/c94c487b4f5cf8126d7e31c11fa166c6.jpg",
  "https://i.pinimg.com/1200x/c9/4c/48/c94c487b4f5cf8126d7e31c11fa166c6.jpg",
  "https://i.pinimg.com/1200x/c9/4c/48/c94c487b4f5cf8126d7e31c11fa166c6.jpg",
  "https://i.pinimg.com/1200x/c9/4c/48/c94c487b4f5cf8126d7e31c11fa166c6.jpg",
];

const Jayesh = () => {
  const [enlargedIndex, setEnlargedIndex] = useState(-1);
  const [isAnyEnlarged, setIsAnyEnlarged] = useState(false);

  const toggleEnlarged = (index) => {
    if (enlargedIndex === index) {
      setEnlargedIndex(-1);
      setIsAnyEnlarged(false); // Close the enlarged image if clicking again
    } else {
      setEnlargedIndex(index);
      setIsAnyEnlarged(true);
    }
  };

  return (
    <div className="main">
      <div className={`main-container ${isAnyEnlarged ? "paused" : ""}`}>
        <div className="jayesh-container">
          {containerContents.map((src, index) => (
            <div
              className={`container ${
                index === enlargedIndex ? "enlarged" : ""
              }`}
              key={index}
              onClick={() => toggleEnlarged(index)}
            >
              <img
                src={src}
                alt={`img${index + 1}`}
                className={`container-image ${
                  index === enlargedIndex ? "paused" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jayesh;
