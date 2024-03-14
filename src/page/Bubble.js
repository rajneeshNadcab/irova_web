

import React, { useState, useEffect } from "react";

const imageUrls = [
  "assets/baby-ghost.png",
  "assets/ghost 1.png",
  "assets/ghost 2.png",
  "assets/ghost 3.png",
  "assets/ghost 4.png",
  "assets/ghost 5.png",
  "assets/ghost 6.png",
  "assets/ghost 7.png",
  "assets/ghost 8.png",
  "assets/ghost 9.png",
  "assets/ghost 10.png",
  "assets/ghost-holding-pumpkin.png",
  "assets/ghost-with-headphones.png",
  "assets/halloween-ghost-with-cap.png",
  "assets/ghost.png",
  "assets/Ghost.gif",
  "assets/ghost-with-scythe.png",
  "assets/ghost-with-headphones.png",
  "assets/ghost-with-lantern.png",
  // "assets/ghost-with-pool.png"
];

const FallingImages = () => {
  const numImages = imageUrls.length;
  const imageHeight = 80; // Fixed image height
  const bounceImages = Math.floor(numImages / 2);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth-50);

  const initialImages = imageUrls.map((url, index) => ({
    id: index,
    x: Math.random() * windowWidth,
    y: -50 - Math.random() * 200 + window.scrollY,
    bounce: index < bounceImages,
    url: url,
    xSpeed: Math.random() > 0.5 ? 2 : -2,
    ySpeed: 5,
  }));

  const [images, setImages] = useState(initialImages);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowWidth(window.innerWidth - 50);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  useEffect(() => {
    // console.log(windowWidth);
    const intervalId = setInterval(() => {
      setImages((prevImages) =>
        prevImages.map((image) => {
          const scrollY = window.scrollY;
          let newY = image.y + (image.bounce ? 10 : image.ySpeed);
          let newX = image.x + image.xSpeed;
          let newXSpeed = image.xSpeed;
          let newYSpeed = image.ySpeed;

          if (image.x <= 0 || image.x >= windowWidth - imageHeight) {
            return {
              ...image,
              y: -imageHeight - Math.random() * 200 + scrollY,
              x: Math.random() * windowWidth,
            };
          }

          if (image.y > window.innerHeight - 200 + scrollY ) {
            return {
              ...image,
              y: -imageHeight - Math.random() * 200 + scrollY,
              x: Math.random() * windowWidth,
            };
          }

          return {
            ...image,
            y: newY,
            x: newX,
            xSpeed: newXSpeed,
            ySpeed: newYSpeed,
          };
        })
      );
    }, 50);     

    return () => clearInterval(intervalId);
  }, [windowWidth]);

  return (
    <div style={{ position: "absolute" }}>
      {images.map((image) => (
        <div
          key={image.id}
          className={`falling-image ${image.bounce ? "bounce" : ""}`}
          style={{ left: image.x, top: image.y, position: "absolute" }}
          id="app"
        >
          <img
            src={image.url}
            alt={`Falling Image ${image.id}`}
            style={{ height: "90px", borderRadius: "50%", width: "90px" }}
          />
        </div>
      ))}
    </div>
  );
};

export default FallingImages;


