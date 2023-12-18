import React from "react";
import { useState, useEffect } from "react";

const PageHeader = ({ title, description, backgroundImages }) => {
  const [preloadedImages, setPreloadedImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const headerStyle = {
    backgroundImage: `url(${preloadedImages[currentImageIndex]?.src || ""})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "40vh",
    display: "flex",
  };

  useEffect(() => {
    const preloadImages = () => {
      const images = [];
      backgroundImages.forEach((image, index) => {
        const img = new Image();
        img.src = image;
        images[index] = img;
      });
      setPreloadedImages(images);
    };

    preloadImages();
  }, [backgroundImages]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 3000);
    // Change image every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, [backgroundImages]);

  return (
    <section id="page-header" className="about-header" style={headerStyle}>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};

export default PageHeader;
